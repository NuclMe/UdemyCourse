import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
function PostList(props) {
    return (
        <ul className='app-list list-group'>
            <PostListItem label='' /> 
            <PostListItem/> 
            <PostListItem/> 
        </ul>
    );
}

export default PostList;