import React, { useRef } from 'react'
import Button from './Button';
import leftScrollIcon from "../icons/leftScrollIcon.svg";
import rightScrollIcon from "../icons/rightScrollIcon.svg";

const ButtonList = () => {

  const scrollRef = useRef(null);
    const list=["All", "JavaScipt", "ReactJS", "NodeJS", "IPL", "Elections" , "Stocks", "Cricket", "Live", "Gaming", "News","Motivation", "Cooking", "Music", "Spiritual" ,"Recent",];
  
    const prevHandler = () => {
      requestAnimationFrame(() => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scrollRef.current.children[0]).width
        );
        scrollRef.current.scrollLeft = scrollLeft - itemWidth * 3;
      });
    };

    const nextHandler = () => {
      requestAnimationFrame(() => {
        const scrollLeft = scrollRef.current.scrollLeft;
        const itemWidth = parseInt(
          getComputedStyle(scrollRef.current.children[0]).width
        );
        scrollRef.current.scrollLeft = scrollLeft + itemWidth * 3;
      });
    };
  
  
  
    return (
    // <div className='flex m-2 p-3'>
    //    {list?.map((data,index)=><Button key={index} name={data} />)}
    // </div>

    <div className="flex sticky top-[64px] z-40 bg-white pb-2 mt-6">
      <button
        className="hover:rounded-full w-10 h-10 mr-2 hover:bg-gray-100 z-50"
        onClick={prevHandler}
      >
        <img
          src={leftScrollIcon}
          alt="leftScrollIcon"
          className="inline-block"
        />
      </button>
      <div ref={scrollRef} className="flex overflow-hidden mx-12 max-w-[86%]">
        {list.map((btnText, index) => (
          <Button name={btnText} key={index} />
        ))}
      </div>
      <button
        className="hover:rounded-full w-10 h-10 ml-2 right-20 hover:bg-gray-100 z-50"
        onClick={nextHandler}
      >
        <img src={rightScrollIcon} alt="rightScrollIcon" />
      </button>
    </div>
  )
}

export default ButtonList;