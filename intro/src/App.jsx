import React from 'react'
import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
// function MyCompo(props)
// {
//   return (
//     <div className= {props.nameForClass}> {props.name}  </div>
//   )
// }

// function MyCompo({ nameForClass, name,income = 10})
// {
  
//   return (
//     <>
//     <div className= {nameForClass}> 
//     {name} : ${income}
//      </div>    
//     <hr/>
//     </>
    
//   )
// }


function App() {
  return (
    <div > 
      <Header/>
      <Home/>
    </div>
  );
}

export default App
