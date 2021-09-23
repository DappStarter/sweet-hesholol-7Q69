require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe story crawl soap assume hockey kiwi army giggle'; 
let testAccounts = [
"0x1647992c8db865852aa46b42ceff0fdcd414a5c56b2f6295f75f7a4c232e8a32",
"0x575f046f6b8c45d1b17584a120e34fe4a2a3c31c481732c70b6942a740a0f5f6",
"0xaf8128193b150a03832e2fae39795048d0b5a6f8c23f42749a34b874c5875000",
"0x3a08fe745b434b2fc4af69cad14f0b9bd5b4a81da5833036ca8508fa8d7f6004",
"0x4304ef76aa4183fa9b34c6ac25425c089919e640b9c8ab3bf08dd89cc4dc50a3",
"0xf6752ad6030fc101fe99551b1f5047b1d5f329e175a5d964ddf67cfebbe7eb10",
"0x6fe8c0b1a85488d8ec961f31f7ebf02b584ecbc5f6ab3b366030af09329def85",
"0x88ba905bb9ae04de4b91cee1d51e038430b8eee17c0b478a28a47c8337e322cc",
"0xd92b566a7c89aa931d982d2a67b981521bc19302cace6258a19f7ae4ef4eb600",
"0x327573c38f524acde9619fe5481cf35e6ecd3ce33199f643da433ad9e53edcfb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

