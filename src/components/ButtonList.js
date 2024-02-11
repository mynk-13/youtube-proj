import React from 'react'
import Button from './Button';

const ButtonList = () => {

    const list=["All", "Stock Markets", "Cricket", "Live", "Gaming", "News","Cooking","Motivation", "Music", "Recently Uploaded"];
  return (
    <div className='flex m-2 p-2'>
       {list?.map((data,index)=><Button key={index} name={data} />)}
    </div>
  )
}

export default ButtonList;