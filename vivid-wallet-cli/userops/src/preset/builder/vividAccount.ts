import { BigNumberish, BytesLike, ethers } from "ethers";
import { UserOperationBuilder } from "../../builder";
import {
  EOASignature,
  estimateUserOperationGas,
  getGasPrice,
} from "../middleware";
import {
  EntryPoint,
  EntryPoint__factory,
  VividAccountFactory,
  VividAccountFactory__factory,
  VividAccount as VividAccountImpl,
  VividAccount__factory,
} from "../../typechain";
import { UserOperationMiddlewareFn } from "../../types";

export class VividAccount extends UserOperationBuilder {
  private signer: ethers.Signer;
  private emailHash: string;
  private bundler: ethers.providers.JsonRpcProvider;  
  private provider: ethers.providers.JsonRpcProvider;
  private entryPoint: EntryPoint;
  private factory: VividAccountFactory;
  private initCode: string;
  proxy: VividAccountImpl;

  private constructor(
    signer: ethers.Signer,
    emailId: string,
    EthNodeRpc: string,
    ERC4337NodeRpc: string,
    entryPoint: string,
    factory: string
  ) {
    super();
    this.signer = signer;
    this.emailHash =  ethers.utils.keccak256(ethers.utils.toUtf8Bytes(emailId));
    this.bundler = new ethers.providers.JsonRpcProvider(ERC4337NodeRpc);
    this.provider = new ethers.providers.JsonRpcProvider(EthNodeRpc);
    this.entryPoint = EntryPoint__factory.connect(entryPoint, this.provider);
    this.factory = VividAccountFactory__factory.connect(
      factory,
      this.provider
    );
    this.initCode = "0x";
    this.proxy = VividAccount__factory.connect(
      ethers.constants.AddressZero,
      this.provider
    );
  }

  private resolveAccount: UserOperationMiddlewareFn = async (ctx) => {
    ctx.op.nonce = await this.entryPoint.getNonce(ctx.op.sender, 0);
    ctx.op.initCode = ctx.op.nonce.eq(0) ? this.initCode : "0x";
  };

  public static async init(
    signer: ethers.Signer,
    emailId: string,
    EthNodeRpc: string,
    ERC4337NodeRpc: string,
    entryPoint: string,
    factory: string,
    paymasterMiddleware?: UserOperationMiddlewareFn
  ): Promise<VividAccount> {
    const instance = new VividAccount(
      signer,
      emailId,
      EthNodeRpc,
      ERC4337NodeRpc,
      entryPoint,
      factory
    );

    try {
      instance.initCode = await ethers.utils.hexConcat([
        instance.factory.address,
        instance.factory.interface.encodeFunctionData("createAccount", [
          instance.emailHash,
          ethers.BigNumber.from(0),
        ]),
      ]);
      await instance.entryPoint.callStatic.getSenderAddress(instance.initCode);

      throw new Error("getSenderAddress: unexpected result");
    } catch (error: any) {
      const addr = error?.errorArgs?.sender;
      if (!addr) throw error;

      instance.proxy = VividAccount__factory.connect(addr, instance.provider);
    }

    const base = instance
      .useDefaults({
        sender: instance.proxy.address,
        signature: await instance.signer.signMessage(
          ethers.utils.arrayify(ethers.utils.keccak256("0xdead"))
        ),
      })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(getGasPrice(instance.provider));

    const withPM = paymasterMiddleware
      ? base.useMiddleware(paymasterMiddleware)
      : base.useMiddleware(estimateUserOperationGas(instance.provider, instance.bundler));

    return withPM.useMiddleware(EOASignature(instance.signer));
  }

  execute(to: string, value: BigNumberish, data: BytesLike) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("execute", [to, value, data])
    );
  }

  executeBatch(to: Array<string>, data: Array<BytesLike>) {
    return this.setCallData(
      this.proxy.interface.encodeFunctionData("executeBatch", [to, data])
    );
  }
}
