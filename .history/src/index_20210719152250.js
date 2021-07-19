import React,{Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

class WhoAmI extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name,surname,link} = this.props;
        return (
            <React.Fragment>
                <h1>My name is {this.name} and my surname is {this.surname}</h1>
                <a href={this.link}> My Profile</a>
            </React.Fragment>
        )
    }
}

// function WhoAmI({name,surname,link}){
 
// }
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

