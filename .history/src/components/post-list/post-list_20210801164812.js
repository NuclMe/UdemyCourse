import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    const elements = posts.map((item) =>{
        
    })
    return (
        <ul className='app-list list-group'>
            <PostListItem label={posts[0].label} important={posts[0].label} /> 
            {/* <PostListItem label='Watch JS' /> 
            <PostListItem label='I am  React' />  */}
        </ul>
    );
}

export default PostList;