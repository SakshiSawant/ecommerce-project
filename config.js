export const nftaddress = '0x0165878A594ca255338adfa4d48449f69242Eb8F'; 
export const nftmarketaddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
export const crowdfundaddress = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853';
export const causeaddress = '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318';
export const allcausesaddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6';
//EDIT !!!
let x = 2;
//change the above everytime you redeploy your contracts

//command for deploying your contracts on hardhat:
// npx hardhat run --network localhost scripts/deploy.js

//1. To install all dependencies: (terminal 1)
//npm install

//* Command for compiling contracts (on another terminal)
//npx hardhat compile

// IMP: 2. command for starting or restarting your server: (terminal 2, keep running)
//npx hardhat node
//Account and private keys will be provided, import localhost:8545 metamask account with same

//3. (terminal 3)
//npx hardhat run scripts/deploy.js --network localhost
//Copy following things in above file
//NFT = nftaddress
//NFTMarket = nftmarketaddress

//IMP : 4. To start frontend (terminal 4, keep running)
//npm run dev

