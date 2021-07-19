import React from 'react';

function PostListItem() {
    return (
        <div>
            <li className='app-list-item'>
                <span className='app-list-item-label'>
                    Hello,world!
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type='button'className='btn-star btn-sm'>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className='btn-trash btn-sm'>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        </div>
    );
}

export default PostListItem;