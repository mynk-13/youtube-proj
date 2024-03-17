import React from 'react'
import Comment from './Comment'

const CommentList = ({comments}) => {
  return comments?.map((data,index)=> 
      <div>
        <Comment key={index} data={data}/>

        {/* REPLIES HARDCODED */}
        {/* <div className='pl-5 ml-5 border border-l-black'>
            <Comment key={index} data={data}/>
            <Comment key={index} data={data}/>
            <Comment key={index} data={data}/>
        </div>  */}
        
        {/* REPLIES DYNAMIC */}
        <div className='pl-5 ml-5 border border-l-black'>
        <CommentList comments={data.replies} />
        </div>

      </div>
      )
}

export default CommentList