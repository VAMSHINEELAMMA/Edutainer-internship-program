import React, { useRef } from 'react';

function Exam(props) {

  const buttonRef = useRef(null);

  const handleFocus = () => {
    buttonRef.current.focus();
  };

  return (
    <div 
      className="jumbotron" 
      style={{ 
        backgroundColor: '#e0f7fa', 
        padding: '20px', 
        borderRadius: '10px', 
        textAlign: 'center',
        marginBottom: '20px'
      }}
    >
      <h1 className="display-4">Hello, {props.name}!</h1>
      <p className="lead">
        {props.name} is having an exam on {props.date}
      </p>
      <hr className="my-4" />

      <p>Best of luck!!!</p>

      <p className="lead">
        <button
          ref={buttonRef}
          className="btn btn-primary btn-lg"
        >
          Learn More
        </button>
      </p>

      <button 
        onClick={handleFocus}
        style={{ marginTop: '10px' }}
      >
        Focus Learn More Button
      </button>

    </div>
  );
}

export default Exam;