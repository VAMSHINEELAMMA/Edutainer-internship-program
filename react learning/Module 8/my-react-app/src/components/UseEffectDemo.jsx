import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]);        

  return (
    <h1>This is demo using React Hooks: {count}</h1>
  );
}

export default UseEffectDemo;
