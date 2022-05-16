/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getAddressBookByNetwork = (network: string) => {
  switch (network) {
    case "matic":
      return {
        GELATO: "0x7598e84B2E114AB62CAB288CE5f7d5f6bad35BbA",
        GELATO_RELAY: "0x837F0BB41d8cA7b051408aD312767e016622ed0b",
        GELATO_RELAY_TRANSIT: "0xE2Fc8F14B6cEb1AD8165623E02953eDB100288bE",
        HELLO_WORLD: "0xc952fAbdeaaea1da8b6102d49A6DFb2dd88DBcb9",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // MATIC
        USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      };

    case "ropsten":
      return {
        GELATO: "0xCc4CcD69D31F9FfDBD3BFfDe49c6aA886DaB98d9",
        GELATO_RELAY: "0x93774A36b4eF8ed5a65Edd9dB00235e7d3Cca4Cc",
        GELATO_RELAY_TRANSIT: "0xE2Fc8F14B6cEb1AD8165623E02953eDB100288bE",
        HELLO_WORLD: "0xF09DF328F6f4aec94130356925d07e5A97Af5fdC",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "0xe71678794fff8846bFF855f716b0Ce9d9a78E844",
      };

    case "goerli":
      return {
        GELATO: "0x683913B3A32ada4F8100458A3E1675425BdAa7DF",
        GELATO_RELAY: "0x6512b8eF67fEd2c7317fE835ddEB425161a1E2F9",
        GELATO_RELAY_TRANSIT: "0xCDdE9992Fb66038Dd8419b56149a75CC79Df133C",
        HELLO_WORLD: "0x0FE88cA117b03A7D399198d6C53502501A6EF63E",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "0x8AdB190AC964D2A0d9f81842175e6b67C7523b18",
      };

    case "rinkeby":
      return {
        GELATO: "0x0630d1b8C2df3F0a68Df578D02075027a6397173",
        GELATO_RELAY: "0x40f413B215C3c21fd5bbA0142DA0a42d211f9496",
        GELATO_RELAY_TRANSIT: "0x7084d869F0C120957E40D762Ebe3104474D5248f",
        HELLO_WORLD: "0x0FE88cA117b03A7D399198d6C53502501A6EF63E",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
      };

    case "kovan":
      return {
        GELATO: "0x0630d1b8C2df3F0a68Df578D02075027a6397173",
        GELATO_RELAY_TRANSIT: "0xb34758F24fFEf132dc5831C2Cd9A0a5e120CD564",
        HELLO_WORLD: "0x79A0cB573D3Db184752511969F1b869A184EA445",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "0xdCFaB8057d08634279f8201b55d311c2a67897D2",
      };

    case "mumbai":
      return {
        GELATO: "0x69623a227Cf0aFF37C3c60f5cd74bfed04377c79",
        GELATO_RELAY: "0x25aD59adbe00C2d80c86d01e2E05e1294DA84823",
        GELATO_RELAY_TRANSIT: "0x24D677f8A59A486BfC6d87E9453C4f1fEfcB0958",
        HELLO_WORLD: "0x0FE88cA117b03A7D399198d6C53502501A6EF63E",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "",
      };

    case "boba":
      return {
        GELATO: "0x91f2A140cA47DdF438B9c583b7E71987525019bB",
        GELATO_RELAY: "0x25aD59adbe00C2d80c86d01e2E05e1294DA84823",
        GELATO_RELAY_TRANSIT: "0x4efaEe0fAD71A451c6Ca621df5AeFc5c01668a26",
        HELLO_WORLD: "0x79A0cB573D3Db184752511969F1b869A184EA445",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "",
      };

    case "cronos":
      return {
        GELATO: "0x91f2A140cA47DdF438B9c583b7E71987525019bB",
        GELATO_RELAY: "0x5c54A5C104f90f5F987FeE09e3C579F40AC43301",
        GELATO_RELAY_TRANSIT: "0x5c54A5C104f90f5F987FeE09e3C579F40AC43301",
        HELLO_WORLD: "0x24D677f8A59A486BfC6d87E9453C4f1fEfcB0958",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "",
      };
    
    case "fantom":
      return {
        GELATO: "0xebA27A2301975FF5BF7864b99F55A4f7A457ED10",
        GELATO_RELAY: "0x62B1a88CCc6BC5e6FF91FB2FCD29Ab4F819b35C6",
        GELATO_RELAY_TRANSIT: "0xFbf1CA2be769b79BE01e48F509107dcACb9ae11b",
        HELLO_WORLD: "0x9593C4c2B78f0d393e933870FBfb585b893eFD4B",
        ETH: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        USDC: "",
      };
      
    default: {
      throw new Error(`addressBooks: network: ${network} not supported`);
    }
  }
};
