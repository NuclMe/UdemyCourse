import React from 'react'
import './app-header.css'
import styled from 'styled-components';
const Header = styled.div`
align-items: flex-end;
justify-content: space-between;
`
const AppHeader = () => {
    return(
        <div className="app-header d-flex">
        <h1>Ivan Petrychenko</h1>
        <h2>5 записей, из них понравилось 0</h2>
    </div>
    )
}
export default AppHeader;