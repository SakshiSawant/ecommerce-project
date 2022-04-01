export const nftaddress = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e'; 
export const nftmarketaddress = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788';
// export const crowdfundaddress = '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853';
export const causeaddress = '0x9A676e781A523b5d0C0e43731313A708CB607508';
export const allcausesaddress = '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82';
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

