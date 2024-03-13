import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, {withLabel} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos]=useState([]);


   const QVideoCard = withLabel(VideoCard);

    useEffect(()=>{
        getVideos();
    },[]);


    const getVideos = async () =>{

        const data =await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json?.items);
         
    }



  return (
    <div className='flex flex-wrap'>
        {videos?.map((data)=><Link key={data.id} to={"/watch?v=" + data.id}>
        {data?.contentDetails?.duration.includes("M")?<VideoCard info={data} />: <QVideoCard info={data} />}
        </Link>)}

        
    </div>
  )
}

export default VideoContainer;