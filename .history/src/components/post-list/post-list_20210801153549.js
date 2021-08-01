import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList(props) {
    return (
        <ul className='app-list list-group'>
            <PostListItem label='Going to watch TV' important /> 
            <PostListItem label='Watch JS' /> 
            <PostListItem label='I am  React' /> 
        </ul>
    );
}

export default PostList;