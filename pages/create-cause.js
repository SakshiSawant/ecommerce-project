import {useState } from 'react'
import {ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import { causeaddress, thecrowdchainaddress } from '../config';
import Cause from '../artifacts/contracts/Cause.sol/Cause.json';
import donatecause from '../artifacts/contracts/TheCrowdChain.sol/TheCrowdChain.json';
import { EtherscanProvider } from '@ethersproject/providers';
import Image from 'next/Image';

import React, {Component} from 'react';
import {default as web3} from './web3'
import TheCrowdChainInstance from "./contracts/TheCrowdChainInstance";
import TheCauseInstance from "./contracts/TheCauseInstance";
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';


// export default function CreateCause() {
//     const [fileUrl, setFileUrl] = useState(null)
    
//     const [formInput, updateFormInput] = useState({price: '', name: '',description:''})
//     const router = useRouter();

//     async function onChange(e) {
//         const file = e.target.files[0]
//         try{ //try uploading the file
//             const added = await client.add(
//                 file,
//                 {
//                     progress: (prog) => console.log(`received: ${prog}`)
//                 }
//             )
//             //file saved in the url path below
//             const url = `https://ipfs.infura.io/ipfs/${added.path}`
//             setFileUrl(url)
//         } catch (e) {
//             console.log('Error uploading file: ', e)
//         }
//     }

//     async function createCause(){
//         const {name, description, price} = formInput; //get the value from the form input
        
//         //form validation
//         if(!name || !description || !price || !fileUrl) {
//             return
//         }

//         const data = JSON.stringify({
//             name, description, image: fileUrl
//         });

//         try{
//             const added = await client.add(data)
//             const url = `https://ipfs.infura.io/ipfs/${added.path}`
//             //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
//             createCauseProject(url)
//         }catch(error){
//             console.log(`Error uploading file: `, error)
//         }
//     }

//     async function createCauseProject(url){
//         const web3Modal = new Web3Modal();
//         const connection = await web3Modal.connect();
//         const provider = new ethers.providers.Web3Provider(connection);

//         //sign the transaction
//         const signer = provider.getSigner();
//         let contract = new ethers.Contract(thecrowdchainaddress, donatecause.abi, signer);
//         let transaction = await contract.startCause(url);
//         let tx = await transaction.wait()

//         //get the tokenId from the transaction that occured above
//         //there events array that is returned, the first item from that event
//         //is the event, third item is the token id.
//         console.log('Transaction: ',tx)
//         console.log('Transaction events: ',tx.events[0])
//         let event = tx.events[0]
//         let value = event.args[2]
//         let tokenId = value.toNumber() //we need to convert it a number

//         //get a reference to the price entered in the form 
//         const price = ethers.utils.parseUnits(formInput.price, 'ether')

//         contract = new ethers.Contract(thecrowdchainaddress, donatecause.abi, signer);

//         //get the listing price
//         // let listingPrice = await contract.getListingPrice()
//         // listingPrice = listingPrice.toString()

//         transaction = await contract.startCause(
//             thecrowdchainaddress, tokenId, price, {value: listingPrice }
//         )

//         await transaction.wait()

//         router.push('/')

//     }



    

//     return (
//         <div className="flex justify-center">
//             <div className="w-1/2 flex flex-col pb-12">
                
//                 <input
//                     placeholder="Asset Price in Eth"
//                     className="mt-8 border rounded p-4"
//                     type="number"
//                     onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
//                 />
                    
//                 <button
//                     className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
//                 onClick={buyNFT(nft)}>Donate NFT</button>
//             </div>
//         </div>
//     )
// }