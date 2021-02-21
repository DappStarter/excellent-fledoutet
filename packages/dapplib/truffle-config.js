require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn proud hockey clinic bridge tunnel'; 
let testAccounts = [
"0xdd79003c7f7e60f1616e7f811c7042b276014c9188aec3816e21b4902cf9b993",
"0x1b185c132bbec372c877d1f436e123d48b4de136106176377bd56a862add6653",
"0xa61fa85d9833b25eb1a1d9499f5b43bdd84ffcbd3de7b968afe4cb9f651ce4e9",
"0x16c1ff1e41d6fb488c700373308e09f5e3132f13e57749510577e6ba413c0ab9",
"0xb6dc6ad839860694d5fbfc1bcea230300baaa172f7e1777a3a309c69b47be6a3",
"0x0cf1b9568f0b7c047be44f815d7d511c3d65bf80158f9d50e4a4b389f1dee166",
"0x8f3f6f412e09e4279022e363ab399812c42348d8c4e73cc663a25d31ac0bfac6",
"0x44da821355c5df6aef009ccdb65b34ae8577c08ea4a403c8fb050e9a338a0f3f",
"0x9af910ca419131730cd60795bb38ad3672a49509d268c055d7b3e1975888f106",
"0xda6826bdfe5306e8e7cb882411fe09b038ecc503a2d64c3a87ce1bc170265da3"
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
            version: '^0.5.11'
        }
    }
};
