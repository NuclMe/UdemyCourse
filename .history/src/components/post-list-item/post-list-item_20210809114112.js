import React, { Component } from 'react';
import './post-list-item.css';



class postListItem extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const PostListItem = ({label, important = false}) => {

    let classNames='app-list-item d-flex justify-content-between';
    if(important){
        classNames += ' important';
    }

    return (
       
    );
}

export default PostListItem;