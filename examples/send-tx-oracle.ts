import hre from "hardhat";
import { RelaySDK } from "@gelatonetwork/relay-sdk";
import helloWorldAbi from "../contracts/abis/HelloWorld.json";
import { getAddressBookByNetwork } from "../constants";
import { BigNumber, Contract } from "ethers";

async function main() {
  const { ETH, HELLO_WORLD, GELATO_RELAY_TRANSIT } = getAddressBookByNetwork(hre.network.name);

  // Verify that current network is supported by Gelato Multichain Relay
  const chainId = hre.network.config.chainId ?? 0;
  const isChainSupported = await RelaySDK.isChainSupported(chainId);
  if (!isChainSupported) {
    console.log("ChainId not supported");
    return;
  }

  // Check if the Relay has an oracle on this network
  const isActiveOracle = await RelaySDK.isOracleActive(chainId);
  if (!isActiveOracle) {
    console.log("Oracle is not active on this network");
    return;
  }

  // Estimate gas limit for our helloWorld call
  const helloWorld = new Contract(HELLO_WORLD, helloWorldAbi, hre.ethers.provider);
  const gasLimit: BigNumber = await helloWorld
    .connect(GELATO_RELAY_TRANSIT) // Gelato relay transit will be our contract caller
    .estimateGas.helloWorld(1, ETH);

  // Estimate the fees to pay to the relayer for the given gas limit
  const estimatedFees: BigNumber = await RelaySDK.getEstimatedFee(
    chainId,
    ETH,
    gasLimit,
    false // Set to true for high priority fees
  );

  // Encode our function call
  const data = helloWorld.interface.encodeFunctionData("helloWorld", [estimatedFees, ETH]);

  // Send our tx to Gelato Relay
  console.log(`Sending Hello World tx to Gelato Relay...`);
  const relayTx = await RelaySDK.sendRelayTransaction(
    chainId,
    HELLO_WORLD, // Smart contract address
    data,
    ETH, // Payment token address
    estimatedFees
  );
  console.log(`RelayTransaction Id: ${relayTx.taskId}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
