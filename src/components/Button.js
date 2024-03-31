import React from 'react'

const Button = ({name}) => {


  return (
    <div>
        <button className='px-5 py-1 my-2 mr-2 rounded-md bg-gray-100 text-black hover:bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button;