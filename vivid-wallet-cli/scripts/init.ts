import fs from "fs/promises";
import path from "path";
import prettier from "prettier";
import { ethers } from "ethers";

const INIT_CONFIG = {
  emailId: "abc@xyz.com",
  bundlerUrl: "http://localhost:4337",
  rpcUrl: "http://localhost:8545",
  signingKey: new ethers.Wallet(ethers.utils.randomBytes(32)).privateKey,
  entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  simpleAccountFactory: "0x9406Cc6185a346906296840746125a0E44976454",
  vividAccountFactory: "0x54A107d3467dF7B2B030321FEE928Bac6f59a0Ae",
  paymaster: {
    rpcUrl: "https://api.stackup.sh/v1/paymaster/API_KEY",
    context: {},
  },
};

const CONFIG_PATH = path.resolve(__dirname, "../config.json");

async function main() {
  return fs.writeFile(
    CONFIG_PATH,
    prettier.format(JSON.stringify(INIT_CONFIG, null, 2), { parser: "json" })
  );
}

main()
  .then(() => console.log(`Config written to ${CONFIG_PATH}`))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
