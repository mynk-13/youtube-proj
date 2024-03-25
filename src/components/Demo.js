import React, { useState } from 'react'

const Demo = () => {

    const [text, setText]=useState("");

    console.log("Rendering....");

    return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>

        <div>
            <input type="text" 
                   className='border border-black w-72 px-2'
                   value={text} 
                   onChange={(e)=>setText(e.target.value)} />
            <button></button>
        </div>
    </div>
  )
}

export default Demo;