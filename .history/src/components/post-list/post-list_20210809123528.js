import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    const elements = posts.map((item) => {
        if(typeof(props) != )
        const {id, ...itemProps} = item;    
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...item}/>
            </li>
        )
    })
    return (
        <ul className='app-list list-group'>
           {elements}
        </ul>
    );
}

export default PostList;