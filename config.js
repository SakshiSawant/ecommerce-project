export const nftaddress = '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318'; 
export const nftmarketaddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6' ;
//export const causeaddress = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';
//export const allcausesaddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';

export const causeaddress = '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e';
export const crowdchainaddress = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788';
//allcauseaddress = crowdchainaddress

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

