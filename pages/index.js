import Head from 'next/head'
import Image from 'next/image'
import { useState } from "react";
import { NFTCard } from "../componenets/nftCard"



export default function Home() {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs,setNFTs]= useState([]);
  const [fetchForCollection, setFetchForCollection]=useState(false);
  const [startToken, setStartToken] = useState('');
  const [pageKey,setPageKey]=useState('');

  const fetchNFTs = async() => {
    let nfts; 
    console.log("fetching nfts");
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;
    var requestOptions = {
        method: 'GET'
      };
     
    if (!collection.length) {
    
      const fetchURL = `${baseURL}?owner=${wallet}`;
  
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL="";
      if(pageKey ==''){
        fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      
    }
    else{
      fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}?pageKey=${pageKey}`;
    }
      nfts= await fetch(fetchURL, requestOptions).then(data => data.json())
    }
  
    if (nfts) {
      console.log("nfts:", nfts)
      if(NFTs.length >0){
      setNFTs([...NFTs,...nfts.ownedNfts])}
      else{
        setNFTs(nfts.ownedNfts);
      }
      if(nfts.pageKey){
        setPageKey(nfts.pageKey)
      }
      else{
        setPageKey('');
      }
    }
  }
  
  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = process.env.NEXT_PUBLIC_API_KEY;
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}&startToken=${startToken}`;
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log(nfts.nextToken)
        if(nfts.nextToken){
          setStartToken(nfts.nextToken)
        }
        else{
          setStartToken('');
        }
        console.log(NFTs.length)
        console.log("NFTs in collection:", nfts)
        if(NFTs.length >0){
          setNFTs([...NFTs,...nfts.nfts])
        }else{
          setNFTs(nfts.nfts)
        }
        
      }
    }
  }
  
  
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input disabled={fetchForCollection} className=" disabled:cursor-not-allowed mt-1 px-3 py-2 bg-gray-600 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/4 rounded-md sm:text-sm focus:ring-1 text-white" onChange={(e)=>{setWalletAddress(e.target.value)}} value={wallet} type={"text"} placeholder="Add your wallet address"></input>
        <input className='text-white mt-1 px-3 py-2 bg-gray-600 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-2/4 rounded-md sm:text-sm focus:ring-1' onChange={(e)=>{setCollectionAddress(e.target.value)}} value={collection} type={"text"} placeholder="Add the collection address"></input>
        <label className="text-white bg-gray-600 font-extrabold text-center mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/4 rounded-full sm:text-sm focus:ring-1 justify-center"><input onChange={(e)=>{setFetchForCollection(e.target.checked)}} type={"checkbox"} className="mr-2 h-4 w-4 accent-green-400 border-0 rounded-md focus:ring-0 "></input>Fetch for collection</label>
        <button className={"disabled:bg-slate-500 font-bold text-white bg-green-400 px-4 py-2 mt-3 rounded-sm w-1/5"} onClick={
           () => {
            setNFTs([])
            if (fetchForCollection) {
              fetchNFTsForCollection()
            }else fetchNFTs()
          }
        }>Lets go! </button>
      </div>
    
      <div className="flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-6 justify-center">
        {
          NFTs.length && NFTs.map((nft ,index) => {
            return (
              <NFTCard nft={nft} key={index}></NFTCard>
              
            );
          })
        }
      </div>
      {startToken? 
          <button 
            className={"disabled:bg-slate-500 text-white btn px-4 py-2 mt-3 rounded-sm w-1/5"}
            onClick={
              () => {
                if (fetchForCollection) {
                  fetchNFTsForCollection()
                }else fetchNFTs()
              }
            }
          >
            More
          </button>
          : <></> }
          {pageKey? 
          <button 
            className={"disabled:bg-slate-500 text-white btn px-4 py-2 mt-3 rounded-sm w-1/5"}
            onClick={
              () => {
                 fetchNFTs()
              }
            }
          >
            More
          </button>
          : <></> }
      
    </div>
  )
}
