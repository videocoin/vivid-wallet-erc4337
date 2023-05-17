import { ethers } from "ethers";
import { Presets } from "../../userops/src";
// @ts-ignore
import config from "../../config.json";

export default async function main() {
  console.log(`Signing Key: ${config.signingKey}`);
  console.log(`rpcUrl: ${config.rpcUrl}`);
  console.log(`entryPoint: ${config.entryPoint}`);
  console.log(`simpleAccountFactory: ${config.simpleAccountFactory}`);

  const simpleAccount = await Presets.Builder.SimpleAccount.init(
    new ethers.Wallet(config.signingKey),
    config.rpcUrl,
    config.entryPoint,
    config.simpleAccountFactory
  );
  const address = simpleAccount.getSender();

  console.log(`SimpleAccount address: ${address}`);
}
