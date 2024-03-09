import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {

 
    const isMenuOpen=useSelector((store)=> store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div>
        <div className='p-5 shadow-lg w-44'>
            <ul className='border-b-2 border-gray-300 py-2'>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Subscriptions</li>
                
            </ul>
            <h1 className='font-bold pt-3'>You</h1>
            <ul className='border-b-2 border-gray-300 py-2'>
                <li>Your Channel</li>
                <li>History</li>
                <li>Your videos</li>
                <li>Watch Later</li>
            </ul>

            <h1 className='font-bold pt-3'>Subscriptions</h1>
            <ul className='border-b-2 border-gray-300 py-2'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold pt-3'>Explore</h1>
            <ul className='border-b-2 border-gray-300 py-2'>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Live</li>
                <li>Gaming</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar;