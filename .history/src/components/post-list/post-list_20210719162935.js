import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
function PostList(props) {
    return (
        <ul className='app-list list-group'>
            <PostListItem label='Going to watch TV' /> 
            <PostListItem label='Going to watch TV' /> 
            <PostListItem label='Going to watch TV' /> 
        </ul>
    );
}

export default PostList;