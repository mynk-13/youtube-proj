import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {


    const [liveUserMessage, setLiveUserMessage] = useState("");

    const dispatch=useDispatch();

    const liveChatMessages = useSelector(store => store.chat.messages);

    useEffect(()=>{

        const id= setInterval(()=>{
            //API Polling
             
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(Math.floor(Math.random()*100)),
            }))
        },1500);

        return ()=>clearInterval(id);

    },[]);





  return (
    <>
    
     <div className='ml-2 w-full h-[570px] px-2 pb-2 border border-slate-400 rounded-2xl'>
       <div className='mt-0 pt-2 mb-2 pb-2 px-1 text-lg font-medium border-b-2 bg-white border-b-slate-300 sticky top-0 z-50'>
         Live Chat 
       </div> 
       <div className='h-[430px] overflow-y-scroll flex flex-col-reverse'>
       {/* <ChatMessage name="Sanjay Choudhary" message="the music played is too good and wow never experienced such a movie before" />
       <ChatMessage name="Sameer Raj" message="better than the last concert" />
       <ChatMessage name="Mayank" message="sgdfxhacvdjknmlasdlasjkdldafshjakldasadhjsadbjsadbskajdnaskdsfjshsdsakda" /> */}

       {liveChatMessages?.map((data,index)=> <ChatMessage key={index} name={data.name} message={data.message} />)}
       
        </div>
        <form className='flex my-3 py-2 border-t-2 border-slate-300' 
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name: "Mayank",
                message: liveUserMessage
            }))
           
         setLiveUserMessage("");
        }}>
            <input type="text"
                   placeholder='Chat...' 
                   value={liveUserMessage}
                   onChange={(e)=>setLiveUserMessage(e.target.value)}
                   className='ml-5 mr-1 my-2 w-10/12 bg-gray-200 border-gray-400 p-2 rounded-full' />
            <button>
                <img className='w-12 rounded-2xl'
                     alt="send-btn"
                     src="https://t4.ftcdn.net/jpg/01/42/65/07/360_F_142650708_u7qvychSOEQajI29PbEXr6VP7nAolb0V.jpg" />
            </button>
        </form>
     </div>
     
    </>
    
  )
}

export default LiveChat
