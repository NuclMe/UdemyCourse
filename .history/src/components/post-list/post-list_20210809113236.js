import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    const elements = posts.map((item) =>{
        const elements = posts.map((item) => {
            const {id, ...itemProps} = item;    
        })
        return (
            <li key={id} className='list-group-item'>
            <PostListItem } /> 
            {/* или можно записать через spread оператор 
            <PostListItem {...item}>
            </>
            будет такой же обьект 
            */}

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