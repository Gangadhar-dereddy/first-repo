import React, { Component } from 'react';
import Pizza from './example.js';

/*
function App() {
  return (
    <div className="App">
      <h1>my first react app</h1>
    </div>
  );
}
*/
class App extends Component{

render(){
let dynamicname ='react is god'
let name = 'pizzahut'
let description = 'it is good one'
return(
  

  <div>
    <h1>{dynamicname}</h1>
    <Pizza name={name} description={description}></Pizza>
    </div>
)
  
}




}



export default App;
