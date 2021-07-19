import React from 'react';

function PostListAddForm() {
    return (
       <form className='bottom-panel d-flex'>
           <input type="text" 
           placeholder='О чем вы думаете сейчас?'
           className='formControl new-post-label'
           />
           <button type='submit'
            className
           >

           </button>
       </form>
    );
}

export default PostListAddForm;