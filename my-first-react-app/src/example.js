import React from 'react';



let Pizza = (props) => {
    console.log("heyyy",props);
    return(
    
    <div class='pizza'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        
        </div>
    )
  }
  


  export default Pizza;