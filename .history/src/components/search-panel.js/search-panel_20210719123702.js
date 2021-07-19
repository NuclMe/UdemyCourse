import React from 'react';

function SearchPanel(props) {
    return (
        <div>
            <input
            className='form-control'
            type='text'
            placeholder='Поиск по записям'
            />
            
        </div>
    );
}

export default SearchPanel;