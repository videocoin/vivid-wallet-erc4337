import { ethers } from "ethers";
import { Client, Presets } from "../../userops/src";
import { CLIOpts } from "../../src";
// @ts-ignore
import config from "../../config.json";

export default async function main(t: string, amt: string, opts: CLIOpts) {
  
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);

  const paymaster = opts.withPM
    ? Presets.Middleware.verifyingPaymaster(
        config.paymaster.rpcUrl,
        config.paymaster.context
      )
    : undefined;
  
  const VividAccount = await Presets.Builder.VividAccount.init(
    new ethers.Wallet(config.signingKey),
    config.emailId,
    config.rpcUrl,
    config.bundlerUrl,
    config.entryPoint,
    config.vividAccountFactory,
    paymaster
  );
  const client = await Client.init(config.rpcUrl, config.bundlerUrl, config.entryPoint);

  const target = ethers.utils.getAddress(t);
  const value = ethers.utils.parseEther(amt);
  const res = await client.sendUserOperation(
    VividAccount.execute(target, value, "0x"),
    {
      dryRun: opts.dryRun,
      onBuild: (op) => console.log("Signed UserOperation:", op),
    }
  );
  console.log(`UserOpHash: ${res.userOpHash}`);

  console.log("Waiting for transaction...");
  const ev = await res.wait();
  console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
}
