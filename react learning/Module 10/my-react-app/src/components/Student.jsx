import React from 'react';
import Exam from './Exam.jsx';

function Student() {
  return (
    <>
      <h1 style={{ color: 'blue', textAlign: 'center' }}>
        Exam Details
      </h1>

      <h3 style={{ textAlign: 'center' }}>
        Exam details coming from child component
      </h3>

      <Exam name="Sonu" date="2024-06-30" />
      <Exam name="Soru" date="2024-07-15" />
      <Exam name="Sohu" date="2024-08-01" />
      <Exam name="Geo" date="2024-08-15" />
      <Exam name="Engy" date="2024-09-01" />
    </>
  );
}

export default Student;