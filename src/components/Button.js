import React from 'react'

const Button = ({name}) => {


  return (
    <div>
        <button className='px-3 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
        {/* <button className='p-2 m-2 bg-gray-300 rounded-lg'>Stock Markets</button>
        <button className='p-2 m-2 bg-gray-300 rounded-lg'>Live</button>
        <button className='p-2 m-2 bg-gray-300 rounded-lg'>Mixes</button>
        <button className='p-2 m-2 bg-gray-300 rounded-lg'>Cricket</button> */}

    </div>
  )
}

export default Button;