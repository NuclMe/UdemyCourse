import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

function WhoAmI({name,surname,link}){
    return (
        <React.Fragment>
            <h1>My name is {name} and my surname is {surname}</h1>
            <a href={link}> My Profile</a>
        </React.Fragment>
    )
}
const All = () =>{
    return(
        
    )
}
ReactDOM.render(<WhoAmI name = 'Jonh' surname = 'Pamel' link='facebook.com'/>,document.getElementById("root"))

