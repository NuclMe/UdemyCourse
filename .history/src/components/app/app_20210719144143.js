import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel.js';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostListAddForm from '../post-list-add-form';
import './app.css';
function App() {
  return (
    <div className="app">
        <AppHeader/>
      < div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>  
        <PostList/>
        <PostListAddForm/>
    </div>
  );
}

export default App;
