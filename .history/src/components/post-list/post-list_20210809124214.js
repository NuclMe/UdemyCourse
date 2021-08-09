import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    const elements = posts.map((item) => {
        if(typeof(posts) != Object || posts === []){

        }
        
    })
    return (
        <ul className='app-list list-group'>
           {elements}
        </ul>
    );
}

export default PostList;