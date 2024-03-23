import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'


const LiveChat = () => {


    useEffect(()=>{

        const id= setInterval(()=>{
            //API Polling
            console.log("API Polling");
        },2000);

        return ()=>clearInterval(id);

    },[]);





  return (
    <div className='ml-2 w-full h-[500px] p-2 border border-slate-300 rounded-2xl'>
       
       <div className='my-2 py-1 px-1 font-medium border-b-2 border-b-slate-300'>
         Live Chat 
       </div>
       <div className=''>
       <ChatMessage name="Sanjay Choudhary" message="the music played is too good and wow never experienced such a movie before" />
       <ChatMessage name="Sameer Raj" message="better than the last concert" />
       <ChatMessage name="Mayank" message="sgdfxhacvdjknmlasdlasjkdldafshjakldasadhjsadbjsadbskajdnaskdsfjshsdsakda" />
       </div>
       
    </div>
  )
}

export default LiveChat
