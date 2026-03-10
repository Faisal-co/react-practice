import React from 'react'
import Card from './components/card.jsx'
import Navbar from './components/navbar.jsx'
import User from './components/User.jsx'

const App = () => {
  const arr = [12,13,14,'aqeel',30,'Rana'];
  return (
    /* <div className="parent">
  <Card heading = "xyz" age = {26} img = "https://images.unsplash.com/photo-1771261799195-466eb30d9669?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
  <Card heading = "MNO" age = "abc" img = "https://images.unsplash.com/photo-1741454570867-4a10f31fc5e3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <Card heading = "Faisal" age = {5464.89} img = "https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  <Card heading = "Siraj" age = {69} img = "https://images.unsplash.com/photo-1768479397383-49806c934167?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  </div> */
  /*<div className="parent">
    
    <User name = {arr[0]}/>  
    <User name = {arr[3]}/>  
    <User name = {arr}/> 
  </div>*/
  <div className="parent">
    {arr.map(function(elem){
    return <User myname = {elem} />
  })}
  </div>
  
  
   
  
)
}

export default App