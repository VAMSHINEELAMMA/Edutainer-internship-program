import React, { useRef } from "react";

function StudentForm() {

  const nameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleClear = () => {
    nameRef.current.value = "";
    phoneRef.current.value = "";
    nameRef.current.focus();
  };

  const handleChangeColor = () => {
    nameRef.current.style.color = "red";   // change text color
  };

  return (
    <div
      style={{
        backgroundColor: "#bdb76b",
        height: "100vh",
        paddingTop: "50px",
        textAlign: "center"
      }}
    >
      <div>
        <label>Enter your Name: </label>
        <input type="text" ref={nameRef} />
      </div>

      <br />

      <div>
        <label>Enter your Phone: </label>
        <input type="text" ref={phoneRef} />
      </div>

      <br />

      <button
        onClick={handleClear}
        style={{ marginRight: "20px" }}
      >
        Clear
      </button>

      <button onClick={handleChangeColor}>
        Change Text
      </button>
    </div>
  );
}

export default StudentForm;