import React from 'react'
import './app-header.css'
import styled from 'styled-components';
const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        :hover{
            color: ${props=>props.colored ? 'red' : 'black'}    
        }
    }
    h2{
        font-size: 1.2rem;
        
        :hover{
            font-size: 1.2rem;
            color: grey;
        }
    }
`

const StyledAppBlock = 
const AppHeader = () => {
    return(
        <Header colored as='a'>
            <h1>Ivan Petrychenko</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}
export default AppHeader;