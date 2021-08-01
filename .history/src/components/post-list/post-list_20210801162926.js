import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    return (
        <ul className='app-list list-group'>
            <PostListItem label={posts[0]} important /> 
            <PostListItem label='Watch JS' /> 
            <PostListItem label='I am  React' /> 
        </ul>
    );
}

export default PostList;