import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel.js';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-list-add-form';
// import style from './app.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
                      `
const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`
const App =  () => {
  const data = [  
    {label: 'Going to watch TV',important:false, id: 'qw'},
    {label: 'Watch JS',important:false, id:'qwq'},
    {label: 'I am  React',important:false, id:'qwqe'}
  ]
  return (
    <StyledAppBlock >
      <AppHeader/>
      <div className="search-panel d-flex">
          <SearchPanel/>
          <PostStatusFilter/>
      </div>
      <PostList posts={data}/>
      <PostAddForm/>
    </StyledAppBlock>
  );
}

export default App;
