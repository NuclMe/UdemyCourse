import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.scss'
import { ListGroup, ListGroupItem } from 'reactstrap';
const PostList = ({posts}) => {
    const elements = posts.map((item) => {
        if(typeof(item) != Object || item != [ ]){
            const {id, ...itemProps} = item;    
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...item}
                    onDelet==>
                    />
                </li>
            )
        }
        
    })
    return (
        <ListGroup className='app-list'>
           {elements}
        </ListGroup>
    );
}

export default PostList;