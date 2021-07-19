import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

const app =(
  <div>
   
   
  </div>
)
// const app = React.createElement('h2',null,'Hello,world')

const Header = () =>{
  return  <h2> Hello,react</h2>
}
const Field = () =>{
  return   <input type='text'/>
}
const Btn = () =>{
  const text = 'log in';
  
  const res = () => {
    return 'Log in, please'
  }
  const p = <p>Log in</p>
  const logged = false
  const styled = {
    width: '300px'
  }
  return <button style={styled}> {logged ? 'true': p}</button>

}
const App = () =>{
  return (
    <div>
        <Header/>
        <Field/>
        <Btn/>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"))

