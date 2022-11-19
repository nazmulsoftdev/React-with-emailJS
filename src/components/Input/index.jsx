import React from "react";

function Input({ type, placeholder, required, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
}

export default Input;
