import React from "react";

function Input({ type, placeholder, required, onChange, name, value }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}

export default Input;
