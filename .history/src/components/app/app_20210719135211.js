import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel.js';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostListAddForm from '../post-list-add-form';
function App() {
  return (
    <div className="main">
        <AppHeader/>
      < div className='searchPanel'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>  
        <PostList/>
    </div>
  );
}

export default App;
