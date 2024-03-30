import React from 'react'

const Demo2 = () => {

    let x=10;

    // console.log(x);
  return (
    <div className='m-4 p-2 w-96 h-96 bg-slate-50 border border-black '>
        <div>
            <button className='bg-green-100 p-2  m-4' 
             onClick={()=>{
                x=x+1;
                console.log(x)}
                }>Increase x</button>
            <span className='font-bold text-xl'>Let = {x}</span>

        </div>
    </div>
  )
}

export default Demo2;
