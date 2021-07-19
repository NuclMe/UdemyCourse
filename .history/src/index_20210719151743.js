import React,{Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

class WhoAmI extends Component{
    
}

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
        <>
            <WhoAmI name = 'Jonh' surname = 'Pamel' link='facebook.com'/>
            <WhoAmI name = 'Alex' surname = 'Pamel' link='facebook.com'/>
            <WhoAmI name = 'Ivan' surname = 'Pamel' link='facebook.com'/>
        </>
    )
}
ReactDOM.render(<All/>,document.getElementById("root"))

