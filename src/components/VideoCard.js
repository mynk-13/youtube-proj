import React from 'react'

const VideoCard = ({info}) => {

    console.log(info);

    const {snippet, statistics}=info;

    const {title, channelTitle, thumbnails}=snippet;

    const {viewCount}=statistics;


  return (
    <div className='p-2 m-2 w-72 shadow-md'>
        <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
        <h1 className='font-bold py-2'>{title}</h1>
        <div>{channelTitle}</div>
        <div>{viewCount} views</div>
    </div>
  )
}

export default VideoCard;