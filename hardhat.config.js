require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/F3ZGZMy3qJoGLX9t5BRx2NKf2_DBKMgb',
      accounts: ['b9c1bee935618921e57f88eeea9fb7bf3c38cc9006e9d4c8999566362fa0f260'],
    },
  },
};