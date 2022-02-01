import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  // Need to remove our event listeners everytime we call otherwise we will keep creating event listeners everytime there is a rerender. In this case, we can use [] since we only need useEffect to run once (on render) to get the event listener, so we can comment out the clean up function. Still, the cleanup function is useful conditional rendering where we will need to remove the event listener
  useEffect(() => {
    console.log("use effect");
    window.addEventListener("resize", checkSize);
    // return () => {
    //   console.log("cleanup");
    //   window.removeEventListener("resize", checkSize);
    // };
  }, []);
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
