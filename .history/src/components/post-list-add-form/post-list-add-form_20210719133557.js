import React from 'react';

function PostListAddForm() {
    return (
       <form className='bottom-panel d-flex'>
           <input type="text" 
           placeholder='О чем вы думаете сейчас?'
           className='formControl'
           />
       </form>
    );
}

export default PostListAddForm;