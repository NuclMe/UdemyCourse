import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

function WhoAmI(props){
    return (
        <React.Fragment>
            <h1>My name is {props.name} and my surname is {props.surname}</h1>
            <a href="#"> My Profile</a>
        </React.Fragment>
    )
}
ReactDOM.render(<WhoAmI name = 'serhii' surname = 'ololo'/>,document.getElementById("root"))

