import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

function whoAmI(){
    return (
        <>
            <h1>My name is</h1>
            <a href="#"> My Profile</a>
        </>
    )
}
ReactDOM.render(<whoAmI/>,document.getElementById("root"))

