import React, { useMemo, useState } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {

    const [text, setText]=useState("");
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    //console.log("Rendering....");

    // const prime = () => {
    //      console.log("Calculating prime no of ", text); 
    //     return findPrime(text);
    // }

    /** MEMOIZATION */

    const prime= useMemo(()=>{
        
        console.log("Calculating prime no of ", text); 
        return findPrime(text)}, [text]);

    return (
    <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-black text-white")}>
        <div>
            <button className=' text-sm m-2 p-2 bg-green-400' onClick={()=>setIsDarkTheme(!isDarkTheme)}>{isDarkTheme?'Light': "Dark"}</button>
        </div>

        <div>
            <input type="number" 
                   className={'border border-black w-72 px-2 ' + (isDarkTheme && "bg-gray-800 text-white")}
                   value={text} 
                   onChange={(e)=>setText(e.target.value)} />
            <button></button>
        </div>
        <div>
            <h1 className='mt-4 font-bold text-xl'>nth Prime: {prime} </h1>
        </div>

    </div>
  )
}

export default Demo;