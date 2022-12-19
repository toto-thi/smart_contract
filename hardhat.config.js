require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/E0_5-9P3ClHsNcBR1sZOIbYrfrLnyRNw',
      accounts: [ '7e52ffaf85098f6ca673df73a7e614febd7a50351da813810aa377bbd257d66f' ]
    }
  }
}