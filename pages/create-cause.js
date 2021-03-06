// Page to create a new cause

import { useState } from 'react'
import {ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

import { crowdfundaddress } from '../config';
import crowdfund from '../artifacts/contracts/CrowdFund.sol/CrowdFund.json';

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');
// import { causeaddress , allcausesaddress } from '../config';
// import Cause from '../artifacts/contracts/Cause.sol/Cause.json';
// import AllCause from '../artifacts/contracts/AllCause.sol/AllCause.json';
import { EtherscanProvider } from '@ethersproject/providers'
import Image from 'next/Image'


export default function CreateCause() {
    // const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({goal: '', name: '', description:''})
    const router = useRouter();

    // async function onChange(e) {
    //     const file = e.target.files[0]
    //     try{ //try uploading the file
    //         const added = await client.add(
    //             file,
    //             {
    //                 progress: (prog) => console.log(`received: ${prog}`)
    //             }
    //         )
    //         //file saved in the url path below
    //         const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //         setFileUrl(url)
    //     }catch(e){
    //         console.log('Error uploading file: ', e)
    //     }
    // }

    //1. create item (image/video) and upload to ipfs
    async function createCause(){
        const {name, description, goal} = formInput; //get the value from the form input
        
        //form validation
        if(!name || !description || !goal || !fileUrl) {
            return
        }

        const data = JSON.stringify({
            name, description, image: fileUrl
        });

        try{
            const added = await client.add(data)
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            //pass the url to sav eit on Polygon adter it has been uploaded to IPFS
            createProject(url)
        }catch(error){
            console.log(`Error uploading file: `, error)
        }
    }

    //2. List item for sale
    async function createProject(url){
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);

        //sign the transaction
        const signer = provider.getSigner();
        let contract = new ethers.Contract(crowdfundaddress, crowdfund.abi, signer);
        let transaction = await contract.createToken(url);
        let tx = await transaction.wait()

        //get the tokenId from the transaction that occured above
        //there events array that is returned, the first item from that event
        //is the event, third item is the token id.
        // console.log('Transaction: ',tx)
        // console.log('Transaction events: ',tx.events[0])
        // let event = tx.events[0]
        // let value = event.args[2]
        // let tokenId = value.toNumber() //we need to convert it a number

        //get a reference to the price entered in the form 
        const goal = ethers.utils.parseUnits(formInput.goal, 'ether')

        // contract = new ethers.Contract(allcausesaddress, AllCause.abi, signer);

        //get the listing price
        let listingPrice = await contract.getListingPrice()
        listingPrice = listingPrice.toString()

        const amount =0;
        transaction = await contract.createCauseItem(
            causeaddress, tokenId, amount, goal, {value: listingPrice }
        )

        await transaction.wait()

        router.push('/allcause')  

    }

    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex flex-col pb-12">
                <input 
                    placeholder="Cause Name"
                    className="mt-8 border rounded p-4"
                    onChange={e => updateFormInput({...formInput, name: e.target.value})}
                    />
                <textarea
                     placeholder="Cause description"
                     className="mt-2 border rounded p-4"
                     onChange={e => updateFormInput({...formInput, description: e.target.value})}
                     />
                <input 
                    placeholder="Goal Amount in Eth"
                    className="mt-8 border rounded p-4"
                    type="number"
                    onChange={e => updateFormInput({...formInput, goal: e.target.value})}
                    />
                    <input
                        type="file"
                        name="Cause"
                        className="my-4"
                        onChange={onChange}
                    />
                    {
                        fileUrl && (
                           
                            <Image
                            src={fileUrl}
                            alt="Picture of the Cause"
                            className="rounded mt-4"
                            width={100}
                            height={350} 
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                          />
                        )
                    }
                    <button onClick={createCause}
                     className="font-bold mt-4 bg-blue-700 text-white rounded p-4 shadow-lg"
                     >Add Cause to Dashboard</button>
            </div>
        </div>
    )
}