require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/LcCAUiJzZQup74fLAS6koVGwWi8KP8Gl",
      accounts: [
        "5ebb39a6b0469e25e3e845711d44743167441435979204a9ac42790bd02a5802",
      ],
    },
  },
};
