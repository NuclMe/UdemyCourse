import React from 'react';
import {Button} from 'reactstrap'    
import './post-status-filter.css';
import { CSSTransitionGroup } from 'react-transition-group-v1'


function PostStatusFilter() {    

    return (
        <div className="btn-group">
            <Button outline color='info'></Button>
            <button type="button" className='btn btn-info'>Все</button>
            <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
         </div>
    );
}

export default PostStatusFilter;