import React, { useState } from 'react';
import Button from './components/button'; 
import Singup from './components/singup'; 

function App() {
  const name = 'Vinathi';
  const element = <h1>Hello, {name}!</h1>;
  const [count,setcount]=useState(0);
  const inccount=()=>{
setcount(count+1);
  }
 
  
  return (
    <div>
      
      {element}
      <button onClick={inccount}>Submit</button> 
      <Singup />
      <p >You have clicked on submit {count} times</p>
    </div>
  );
}

export default App;
