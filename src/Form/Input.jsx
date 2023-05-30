import React from 'react'

const Input = ({ label, id, type }) => {
  return (
    <div style={{margin: "5px"}}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type}/>
    </div>
  );
};

export default Input;