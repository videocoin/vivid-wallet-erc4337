import { ethers } from "ethers";
import { Presets } from "../../userops/src";
// @ts-ignore
import config from "../../config.json";

export default async function main() {
  console.log(`Signing Key: ${config.signingKey}`);
  console.log(`rpcUrl: ${config.rpcUrl}`);
  console.log(`entryPoint: ${config.entryPoint}`);
  console.log(`vividAccountFactory: ${config.vividAccountFactory}`);

  const vividAccount = await Presets.Builder.VividAccount.init(
    new ethers.Wallet(config.signingKey),
    config.emailId,
    config.rpcUrl,
    config.bundlerUrl,    
    config.entryPoint,
    config.vividAccountFactory
  );
  const address = vividAccount.getSender();

  console.log(`VividAccount address: ${address}`);
}
