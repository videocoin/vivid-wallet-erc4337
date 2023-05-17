import { BigNumber, Wallet } from 'ethers'
import { ethers } from 'hardhat'
import { expect } from 'chai'
import {
  ERC1967Proxy__factory,
  VividAccount,
  VividAccountFactory__factory,
  VividAccount__factory,
  TestUtil,
  TestUtil__factory
} from '../typechain'
import {
  createAccount,
  createAddress,
  createAccountOwner,
  createAccountAdmin,
  deployEntryPoint,
  getBalance,
  isDeployed,
  ONE_ETH,
  HashZero
} from './vivid-account-testutils'
import { fillUserOpDefaults, getUserOpHash, packUserOp, signUserOp } from './UserOp'
import { parseEther } from 'ethers/lib/utils'
import { UserOperation } from './UserOperation'
import { keccak256 } from 'ethereumjs-util'

describe('VividAccount', function () {
  let entryPoint: string
  let accounts: string[]
  let testUtil: TestUtil
  let accountAdmin: Wallet  
  let accountOwner: Wallet
  let emailHash: string

  const ethersSigner = ethers.provider.getSigner()

  before(async function () {
    entryPoint = await deployEntryPoint().then(e => e.address)
    accounts = await ethers.provider.listAccounts()
    // ignore in geth.. this is just a sanity test. should be refactored to use a single-account mode..
    if (accounts.length < 2) this.skip()
    testUtil = await new TestUtil__factory(ethersSigner).deploy()
    accountOwner = createAccountOwner()
    accountAdmin = createAccountAdmin();
    const emailBytes = ethers.utils.toUtf8Bytes('abc@xyz.com');
    emailHash = ethers.utils.keccak256(emailBytes);
  })

  it('admin should be able to set owner', async () => {
    await ethersSigner.sendTransaction({ to: accountAdmin.address, value: parseEther('2') })
    const { proxy: account } = await createAccount(accountAdmin, accountAdmin.address, emailHash, entryPoint)
    await account.setOwner(accountOwner.address);

    console.log("********** account ******", account.address, " entryPoint:", await account.entryPoint(), "admin-in:", accountAdmin.address, "owner:", await account.admin(), "owner-in:", accountOwner.address, "owner:", await account.owner(), " emailHash:", await account.emailHash());
  })

  it('admin should be able to call transfer', async () => {
    const { proxy: account } = await createAccount(ethers.provider.getSigner(), accountAdmin.address, emailHash, entryPoint)
    console.log("********** account ******", account.address, accountOwner.address);
    await ethersSigner.sendTransaction({ from: accounts[0], to: account.address, value: parseEther('2') })
    //await account.execute(accounts[2], ONE_ETH, '0x')
  })
  it('other account should not be able to call transfer', async () => {
    const { proxy: account } = await createAccount(ethers.provider.getSigner(), accounts[0], emailHash, entryPoint)
    await expect(account.connect(ethers.provider.getSigner(1)).execute(accounts[2], ONE_ETH, '0x'))
      .to.be.revertedWith('account: not Owner or EntryPoint')
  })

  it('should pack in js the same as solidity', async () => {
    const op = await fillUserOpDefaults({ sender: accounts[0] })
    const packed = packUserOp(op)
    expect(await testUtil.packUserOp(op)).to.equal(packed)
  })

  describe('#validateUserOp', () => {
    let account: VividAccount
    let userOp: UserOperation
    let userOpHash: string
    let preBalance: number
    let expectedPay: number

    const actualGasPrice = 1e9
    // for testing directly validateUserOp, we initialize the account with EOA as entryPoint.
    let entryPointEoa: string
    let admin: string

    before(async () => {
      entryPointEoa = accounts[2]
      admin = accounts[3]
      const epAsSigner = await ethers.getSigner(entryPointEoa)

      // cant use "VividAccountFactory", since it attempts to increment nonce first
      const implementation = await new VividAccount__factory(ethersSigner).deploy(admin, entryPointEoa)
      const proxy = await new ERC1967Proxy__factory(ethersSigner).deploy(implementation.address, '0x')
      account = VividAccount__factory.connect(proxy.address, epAsSigner)

      await ethersSigner.sendTransaction({ from: accounts[0], to: account.address, value: parseEther('0.2') })
      const callGasLimit = 200000
      const verificationGasLimit = 100000
      const maxFeePerGas = 3e9
      const chainId = await ethers.provider.getNetwork().then(net => net.chainId)

      userOp = signUserOp(fillUserOpDefaults({
        sender: account.address,
        callGasLimit,
        verificationGasLimit,
        maxFeePerGas
      }), accountOwner, entryPointEoa, chainId)

      userOpHash = await getUserOpHash(userOp, entryPointEoa, chainId)

      expectedPay = actualGasPrice * (callGasLimit + verificationGasLimit)

      preBalance = await getBalance(account.address)
      const ret = await account.validateUserOp(userOp, userOpHash, expectedPay, { gasPrice: actualGasPrice })
      await ret.wait()
    })

    it('should pay', async () => {
      const postBalance = await getBalance(account.address)
      expect(preBalance - postBalance).to.eql(expectedPay)
    })

    it('should return NO_SIG_VALIDATION on wrong signature', async () => {
      const userOpHash = HashZero
      const deadline = await account.callStatic.validateUserOp({ ...userOp, nonce: 1 }, userOpHash, 0)
      expect(deadline).to.eq(1)
    })
  })

  context('VividAccountFactory', () => {
    it('sanity: check deployer', async () => {
      const admin = createAddress();
      emailHash = "123";
      const deployer = await new VividAccountFactory__factory(ethersSigner).deploy(admin, entryPoint)
      const target = await deployer.callStatic.createAccount(emailHash, 1234)
      expect(await isDeployed(target)).to.eq(false)
      await deployer.createAccount(emailHash, 1234)
      expect(await isDeployed(target)).to.eq(true)
    })
  })
})
