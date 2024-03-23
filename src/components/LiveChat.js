import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {


    const dispatch=useDispatch();

    const liveChatMessages = useSelector(store => store.chat.messages);

    useEffect(()=>{

        const id= setInterval(()=>{
            //API Polling
             
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(Math.floor(Math.random()*100)),
            }))
        },500);

        return ()=>clearInterval(id);

    },[]);





  return (

    <div className='ml-2 w-full h-[500px] px-2 pb-2 border border-slate-400 rounded-2xl'>
       <div className='mt-0 pt-2 mb-2 pb-2 px-1 text-lg font-medium border-b-2 bg-white border-b-slate-300 sticky top-0 z-50'>
         Live Chat 
       </div> 
       <div className='h-[430px] overflow-y-scroll flex flex-col-reverse'>
       {/* <ChatMessage name="Sanjay Choudhary" message="the music played is too good and wow never experienced such a movie before" />
       <ChatMessage name="Sameer Raj" message="better than the last concert" />
       <ChatMessage name="Mayank" message="sgdfxhacvdjknmlasdlasjkdldafshjakldasadhjsadbjsadbskajdnaskdsfjshsdsakda" /> */}

       {liveChatMessages?.map((data,index)=> <ChatMessage key={index} name={data.name} message={data.message} />)}
       
    </div>
    </div>
    
  )
}

export default LiveChat
