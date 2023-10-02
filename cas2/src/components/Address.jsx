import React from 'react';

export const Address = (props) => {
  return (
    <div id="student">
      <h3>Students from Skopje:</h3>
      {props.student.map((student, index) => {
        if (student.address === "Skopje") {
          return (
            <div key={index}>
              <p>Name: {student.name}</p>
              <p>Address: {student.address}</p>
              <p>College: {student.college}</p>
            </div>
          );
        }
        return null; // Skip students not from Skopje
      })}
    </div>
  );
}
