import  { ethers } from "ethers";
import fs from "fs";
import  path from "path"

const ENTRY_POINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
const VIVD_WALLET_FACTORY = "0x80b02bc9A18955FfC6C0E8380480f34E5819e105"

const getTheAbi = (abiFile) => {
	try {
	  const dir = path.resolve(__dirname, "./abi/" + abiFile)
	  const file = fs.readFileSync(dir, "utf8")
	  const json = JSON.parse(file)
	  const abi = json.abi
  
	  return abi
	} catch (e) {
	  console.log(`e`, e)
	}
}

async function main(){

	const emailId = process.argv[2] ? process.argv[2] : "abc@xyz.com"
	const provider = ethers.getDefaultProvider('https://dev.videocoin.network/rpc') 

	//const blocknumber  = await provider.getBlockNumber()
	//console.log("blocknumber", blocknumber)
	const emailHash =  ethers.utils.keccak256(ethers.utils.toUtf8Bytes(emailId));
	
	//const initCode = "0x80b02bc9a18955ffc6c0e8380480f34e5819e1056586ace6000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042307837303738663265613530386262336665343639636163613933383530323037376266363563356439383733633037616338383862383266316438636633353763000000000000000000000000000000000000000000000000000000000000"
	const abiEntryPoint = getTheAbi("EntryPoint.json")
	const abiVividAccountFactory = getTheAbi("VividAccountFactory.json")

	const entryPoint = new ethers.Contract( ENTRY_POINT_ADDRESS , abiEntryPoint , provider )
	const vividAccountFactory = new ethers.Contract( VIVD_WALLET_FACTORY , abiVividAccountFactory , provider )
	const initCode = await ethers.utils.hexConcat( [ VIVD_WALLET_FACTORY, vividAccountFactory.interface.encodeFunctionData("createAccount", [emailHash, ethers.BigNumber.from(0)])])

	const senderAddress = await entryPoint.callStatic.getSenderAddress(initCode)
	.then(() => {
		throw new Error("Expected getSenderAddress() to revert");
	})
	.catch((e) => {
		console.log(e.errorArgs);
		});
	}

main()

