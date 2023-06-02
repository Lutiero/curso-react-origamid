import React from 'react'
const Input = ({ label, id, type, placeholder, value, onChange, onBlur, error }) => {
  return (
    <div style={{margin: "5px"}}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;