import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

function WhoAmI(props){
    return (
        <React.Fragment>
            <h1>My name is</h1>
            <a href="#"> My Profile</a>
        </React.Fragment>
    )
}
ReactDOM.render(<WhoAmI/>,document.getElementById("root"))

