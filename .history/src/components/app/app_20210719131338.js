import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel.js';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
function App() {
  return (
    <div className="App">
        <AppHeader/>
      < div className='searchPanel'>
          <SearchPanel/>
        </div>
        <PostStatusFilter/>
        <PostList/>
    </div>
  );
}

export default App;
