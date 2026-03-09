import React, { useState } from "react";
import Child from "./components/Child";

function App() {
  const [message, setMessage] = useState("");

  const receiveDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Child-to-Parent Communication Using Callback Functions</h2>
      <Child sendData={receiveDataFromChild} />
      <h3>Message received in Parent:</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;