import  { ethers } from "ethers";
import fs from "fs";
import  path from "path"

const ENTRY_POINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
const VIVD_WALLET_FACTORY = "0xA8d8Bd986Fd1b046e00025EB63b02e80F95Bc24a"; //"0x80b02bc9A18955FfC6C0E8380480f34E5819e105"
const VIVID_NFT_TEST_CONTRACT = "0x858b68204a664446da9BF7aE34586cb5d798D08e"

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

async function  getAccountForEmail  (provider: ethers.Wallet, vividAccountFactory: ethers.Contract, emailId: string): Promise<ethers.Contract> {
	const emailHash =  ethers.utils.keccak256(ethers.utils.toUtf8Bytes(emailId));
	const transaction = await vividAccountFactory.createAccount(emailHash, ethers.BigNumber.from(0));
	const receipt = await transaction.wait();
	if (receipt && receipt.status == 1) {
		const addressVividAccount = await vividAccountFactory.getAddress(emailHash, ethers.BigNumber.from(0));
		const abiVividAccount = getTheAbi("VividAccount.json")
		const vividAccount = new ethers.Contract( addressVividAccount, abiVividAccount , provider )
		return vividAccount
	} 
}

async function generateCallDataForNftTransfer(fromAccount: string, toAccount: string, nftContract: ethers.Contract, tokenId: string) {
	const callData = nftContract.interface.encodeFunctionData("safeTransferFrom(address, address, uint256)", [fromAccount, toAccount, ethers.BigNumber.from(tokenId)])
	return callData;
}

async function main(){

	if (process.argv.length < 6) {
		console.log("Usage: yarn ts-node setowner email owner-address")
		return
	}
	const fromEmailId = process.argv[2]
	const toEmailId = process.argv[3]
	const nftContract = process.argv[4]
	const tokenId = process.argv[5]

	const provider = ethers.getDefaultProvider('https://dev.videocoin.network/rpc') 
	let walletWithProvider = new ethers.Wallet(process.env.VID_SIGNER_KEY, provider);
	
	const abiVividAccountFactory = getTheAbi("VividAccountFactory.json")
	const abiVivid721v2 = getTheAbi("Vivid721v2.json")

	const vividAccountFactory = new ethers.Contract( VIVD_WALLET_FACTORY , abiVividAccountFactory , walletWithProvider )
	const fromVividAccount = await getAccountForEmail(walletWithProvider, vividAccountFactory, fromEmailId)
	const toVividAccount = await getAccountForEmail(walletWithProvider, vividAccountFactory, toEmailId)
	const vivid721v2 = new ethers.Contract( nftContract , abiVivid721v2 , walletWithProvider )

	console.log(`form ${fromVividAccount.address} to ${toVividAccount.address}`)
	let balance = await vivid721v2.balanceOf(fromVividAccount.address)
	console.log(balance.toNumber())
	if(balance.toNumber() > 0) {
		const callData = await generateCallDataForNftTransfer(fromVividAccount.address, toVividAccount.address, vivid721v2, tokenId)
		const receipt = fromVividAccount.execute(vivid721v2.address, 0, callData)
		console.log(receipt)
	}
}

main()

