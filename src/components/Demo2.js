import React, { useRef, useState } from 'react'

const Demo2 = () => {

    let x=0;
    const [y, setY] = useState(0);
    
    const ref=useRef(0);
   // ref={current :0}

       console.log("Rendering.....");
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
             }}>Increase y</button>
            <span className='font-bold text-xl'>Ref = {ref.current}</span>

        </div>
    </div>
  )
}

export default Demo2;
