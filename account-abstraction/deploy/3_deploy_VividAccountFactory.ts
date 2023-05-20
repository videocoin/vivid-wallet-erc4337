import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deployVividAccountFactory: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const provider = ethers.provider
  const from = await provider.getSigner().getAddress()

  const entrypoint = await hre.deployments.get('EntryPoint')
  const ret = await hre.deployments.deploy(
    'VividAccountFactory', {
      from,
      args: [from, entrypoint.address],
      gasLimit: 6e6,
      deterministicDeployment: true
    })
  console.log('==VividAccountFactory addr=', ret.address)
}

export default deployVividAccountFactory
