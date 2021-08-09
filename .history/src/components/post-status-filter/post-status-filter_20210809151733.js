import React from 'react';
import {Button} from 'reactstrap' ;   
import './post-status-filter.css';
import { TransitionGroup } from 'react-transition-group-v1';
import { ListGroup, ListGroupItem } from 'reactstrap';


function PostStatusFilter() {    

    return (
        <ListGroup>
        <div className="btn-group">
            <Button outline color='info'> Все</Button>
            <button type="button" className='btn btn-info'>Все</button>
            <button type="button" className='btn btn-outline-secondary'>Понравилось</button>
         </div>
         </ListGroup>
    );
}

export default PostStatusFilter;