import React from 'react'
import './app-header.css'
import styled from 'styled-components';
const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
`
const AppHeader = () => {
    return(
        <Header cs>
        <h1>Ivan Petrychenko</h1>
        <h2>5 записей, из них понравилось 0</h2>
    </Header>
    )
}
export default AppHeader;