import React, { useState } from "react";
// Hook rules
// Start with use, name must start with uppercase, must be called inside the component function body, and cannot be called conditionally (hooks cannot be called inside an if else statement) 

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // useState returns an array with whatever was entered and a function that sets the state. We destructure the array to get both and then set up a toggle function with the values 
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
