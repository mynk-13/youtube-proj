import React, { useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {

    const [text, setText]=useState("");

    console.log("Rendering....");

    const prime = findPrime(text);

    return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>

        <div>
            <input type="text" 
                   className='border border-black w-72 px-2'
                   value={text} 
                   onChange={(e)=>setText(e.target.value)} />
            <button></button>
        </div>
        <div>
            <h1>nth Prime: {prime} </h1>
        </div>

    </div>
  )
}

export default Demo;