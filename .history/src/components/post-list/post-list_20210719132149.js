import React from 'react';
import PostListItem from '../post-list-item';
function PostList(props) {
    return (
        <ul classname='app-list list-group'>
            <PostListItem/> 
        </ul>
    );
}

export default PostList;