import React from 'react';

function Button(props) {
  const { buttonText } = props;
  function handle(){
    alert('Fake Button was clicked!');
  }
  return (
    <>
    <button onClick={handle}>
      {buttonText}
    </button>
    
    </>
  );
}

export default Button;
