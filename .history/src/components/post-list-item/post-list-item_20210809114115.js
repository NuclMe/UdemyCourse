import React, { Component } from 'react';
import './post-list-item.css';



class postListItem extends Component {
    render() {
        return (
            <div>
                 <li className={classNames}>
            <span className="app-list-item-label">
              {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
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