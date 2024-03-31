import React from 'react'

const VideoCard = ({info}) => {

    //console.log(info);

    const {snippet, statistics}=info;

    const {title, channelTitle, thumbnails, publishedAt}=snippet;

    const {viewCount}=statistics;


  return (
    <div className='p-2 m-2 w-72'>
        <img className="rounded-lg hover:drop-shadow-xl" src={thumbnails?.medium?.url} alt="thumbnail" />
        <ul className="flex justify-start items-start">
        <img
          className="rounded-full w-7 h-7 mt-2 mr-2"
          alt="channel-img"
          src={thumbnails?.default?.url}
        />

        <div>
           <li className="font-semibold py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">{title}</li>
           <li className="text-gray-800 text-[13px]">{channelTitle}</li>
           <li className="text-gray-800 text-[13px]">
            {viewCount} views{" "}   
            <span className="font-bold text-xl m-1">·</span>
            {Math.floor(Math.abs(new Date(publishedAt) - new Date()) / (60 * 60 * 24 * 1000))}
            <span className="ml-1">days ago</span>
          </li>
        </div>
         
        </ul>
    </div>
  )
}


export const withLabel = (VideoCard) =>{

  return (props) => {
              return <div>
                  
                  <label className='mx-4 my-2 p-1 absolute bg-red-600 text-slate-50 font-semibold rounded-r-md text-xs'>{"<1 min"}</label>
                   <div><VideoCard {...props} /></div>
                   
                </div>



  }
}

export default VideoCard;