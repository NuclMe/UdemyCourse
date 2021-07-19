import React,{Component} from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./components/app"

class WhoAmI extends Component{
    constructor(props){
        super(props)
        this.state = {
            years:26
        }
    }
    render(){
        const {name,surname,link} = this.props;
        const {years} = this.state;
        return (
            <React.Fragment>
                <h1>My name is {name} and my surname is {surname}, years={this.state.years}</h1>
                <a href={link}> My Profile</a>
            </React.Fragment>
        )
    }
}

// function WhoAmI({name,surname,link}){
 
// }
const All = () =>{
    return(
        <>
            <WhoAmI name = 'Jonh' surname = 'Pamel' link='vk.com'/>
            <WhoAmI name = 'Alex' surname = 'Pamel' link='google.com'/>
            <WhoAmI name = 'Ivan' surname = 'Pamel' link='facebook.com'/>
        </>
    )
}
ReactDOM.render(<All/>,document.getElementById("root"))

