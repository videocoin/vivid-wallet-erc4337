import  { ethers } from "ethers";
import fs from "fs";
import  path from "path"

const ENTRY_POINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
const VIVD_WALLET_FACTORY = "0xA8d8Bd986Fd1b046e00025EB63b02e80F95Bc24a"; //"0x80b02bc9A18955FfC6C0E8380480f34E5819e105"

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

	if (process.argv.length < 3) {
		console.log("Usage: yarn ts-node setowner email owner-address")
		return
	}
	const emailId = process.argv[2]
	const owner = process.argv[3]

	const provider = ethers.getDefaultProvider('https://dev.videocoin.network/rpc') 
	let walletWithProvider = new ethers.Wallet(process.env.VID_SIGNER_KEY, provider);

	const emailHash =  ethers.utils.keccak256(ethers.utils.toUtf8Bytes(emailId));
	
	const abiVividAccountFactory = getTheAbi("VividAccountFactory.json")

	const vividAccountFactory = new ethers.Contract( VIVD_WALLET_FACTORY , abiVividAccountFactory , walletWithProvider )
	const transaction = await vividAccountFactory.createAccount(emailHash, ethers.BigNumber.from(0));
	transaction.wait().then(async (receipt) => {
		if (receipt && receipt.status == 1) {
			console.log(receipt)
			const addressVividAccount = await vividAccountFactory.getAddress(emailHash, ethers.BigNumber.from(0));
			console.log(addressVividAccount);
			const abiVividAccount = getTheAbi("VividAccount.json")
			const vividAccount = new ethers.Contract( addressVividAccount, abiVividAccount , walletWithProvider )
			const transaction2 = await vividAccount.setOwner(owner);
			transaction2.wait().then(async (receipt) => {
				if (receipt && receipt.status == 1) {
					console.log(receipt)
				}
			})
		}
	})
}

main()

