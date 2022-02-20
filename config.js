export const nftaddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; 
//"0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const nftmarketaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3' ;
//"0x5FbDB2315678afecb367f032d93F642f64180aa3";
// export const causeaddress = "";
// export const thecrowdchainaddress = "";
//EDIT !!!
let x = 1;
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