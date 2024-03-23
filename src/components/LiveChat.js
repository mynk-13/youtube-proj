import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';


const LiveChat = () => {


    const dispatch=useDispatch();

    const liveChatMessages = useSelector(store => store.chat.messages);

    useEffect(()=>{

        const id= setInterval(()=>{
            //API Polling
             
            dispatch(addMessage({
                name:"Virat",
                message:"Old is gold in terms of songs♥"
            }))
        },2000);

        return ()=>clearInterval(id);

    },[]);





  return (
    <div className='ml-2 w-full h-[500px] p-2 border border-slate-300 rounded-2xl  overflow-y-scroll'>
       
       <div className='my-2 py-1 px-1 font-medium border-b-2 border-b-slate-300'>
         Live Chat 
       </div>
       <div className=''>
       {/* <ChatMessage name="Sanjay Choudhary" message="the music played is too good and wow never experienced such a movie before" />
       <ChatMessage name="Sameer Raj" message="better than the last concert" />
       <ChatMessage name="Mayank" message="sgdfxhacvdjknmlasdlasjkdldafshjakldasadhjsadbjsadbskajdnaskdsfjshsdsakda" /> */}

       {liveChatMessages?.map((data,index)=> <ChatMessage key={index} name={data.name} message={data.message} />)}
       </div>
       
    </div>
  )
}

export default LiveChat
