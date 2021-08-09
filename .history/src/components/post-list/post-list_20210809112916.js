import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css'
const  PostList = ({posts}) => {
    const elements = posts.map((item) =>{
        const elements = posts.map((item) => {
            const {id, ...itemProps} = item;    
        })
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem 
            label={item.label} 
            important={item.important} /> 
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