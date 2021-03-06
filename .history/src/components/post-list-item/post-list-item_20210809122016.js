import React, { Component } from 'react';
import './post-list-item.css';



class postListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            important:false,
            like:false,
        }
        this.onImportant = this.onImportant.bind(this)
        this.onImportant = this.onLike.bind(this)
    }
    onImportant(){
        this.setState(({important}) =>({
            important: !important
        }))
    }
    onLike(){
        this.setState(({like}) =>({
            important: !like
        }))
    }
    render() {
        const {label} = this.props
        const {important} = this.state;
        let classNames='app-list-item d-flex justify-content-between';
        if(important){
            classNames += ' important';
        }
        return (
        <li className={classNames}>
            <span className="app-list-item-label">
              {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm" onClick={this.onImportant}>
                    <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
           
        );
    }
}

export default postListItem;