import React from 'react';
import { commentsData } from '../utils/constants';
import CommentList from './CommentList';

const CommentsContainer = () => {

 return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold my-4'>Comments: </h1>
        <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;