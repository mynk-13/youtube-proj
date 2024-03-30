import React, { useEffect, useRef, useState } from 'react'

const Demo2 = () => {

    let x=0;
    const [y, setY] = useState(0);
    
    const ref=useRef(0);
   // ref={current :0}

       console.log("Rendering.....");

      
    //    let i={
    //     current:null,
    //    };

      const i= useRef(null);
       useEffect(()=>{

      i.current = setInterval(()=>{console.log("Namaste React ", Math.random()*10)},1000);

       return ()=> clearInterval(i.current);
       },[]);

  return (
    <div className='m-4 p-2 w-96 h-96 bg-slate-50 border border-black '>
        <div>
            <button className='bg-green-100 p-2  m-4' 
             onClick={()=>{
                x=x+1;
                console.log("x= ", x)}
                }>Increase x</button>
            <span className='font-bold text-xl'>Let = {x}</span>

        </div>
        <div>
            <button className='bg-green-100 p-2  m-4' 
             onClick={()=>setY(y+1)}>Increase y</button>
            <span className='font-bold text-xl'>State = {y}</span>

        </div>
        <div>
            <button className='bg-green-100 p-2  m-4' 
             onClick={()=>{
                ref.current=ref.current+1;
                console.log("ref = ", ref.current);
             }}>Increase Ref</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span>

        </div>
        <button onClick={()=> clearInterval(i.current)} 
         className='m-4 p-4 bg-red-900 text-white font-bold rounded-md'>Stop Printing</button>
    </div>
  )
}

export default Demo2;
