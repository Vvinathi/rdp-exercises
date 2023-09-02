import React from 'react';
import Button from './button'; 

function Signup() {
  const fname = 'Vinathi';
  const lname = 'Vissapragada';
  const fullname = <h3>Sign in as {fname} {lname}?</h3>;
  
  return (
    <div>
      <h2>Sign Up Form</h2>
      {fullname}
      <Button buttonText="Sign Up" />
      <Button buttonText="Login" />
    </div>
  );
}

export default Signup;
