import React from 'react';

export const Age = (props) => {
  const olderThan18Students = props.student.filter(student => student.age > 18);

  return (
    <div id="student">
      <h3>Students older than 18:</h3>
      {olderThan18Students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Address: {student.address}</p>
          <p>College: {student.college}</p>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}
