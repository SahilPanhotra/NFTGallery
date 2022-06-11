export const NFTCard = ({ nft }) => {

    return (
    
        <div className="w-1/4 flex flex-col">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} />
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bgslate rounded-b-md h-110  ">
            <div >
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">Id: {nft.id.tokenId.substr(nft.id.tokenId.length-4)}</p>
                <p className="text-gray-600">{`${nft.contract.address.substr(0,4)}...${nft.contract.address.substr(nft.contract.address.length-4)}`}</p>
                <button onClick={() =>  navigator.clipboard.writeText(`${nft.contract.address}`)} className="btn text-white">Copy Contract Address</button>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description}</p>
            </div>
            <div className='btn'>
                <a target="_blank" href={`https://etherscan.io/token/${nft.contract.address}`} className="text-white px-2 py-4 bg-blue-500/100 text-center rounded-md cursor-pointer ">View on Etherscan</a>
            </div>
        </div>
        

    </div>
    
    )
}
