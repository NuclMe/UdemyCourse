import React from 'react';
import './post-add-form.css'
function PostAddForm() {
    return (
       <form className='bottom-panel d-flex'>
           <input type="text" 
           placeholder='О чем вы думаете сейчас?'
           className='formControl new-post-label'
           />
           <button type='submit'
            className='btn btn-outline-secondary'
           >
               Сабмит
           </button>
       </form>
    )
}

export default PostAddForm;