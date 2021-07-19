import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel.js';

function App() {
  return (
    <div className="App">
        <AppHeader/>
      <div className='searchPanel'>
          <SearchPanel/>
          </div>
    </div>
  );
}

export default App;
