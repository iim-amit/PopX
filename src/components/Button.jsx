import React from "react";


const Button = ({ label, onClick, className }) => (
  <button onClick={onClick} className={`focus:outline-none ${className}`}>
    {label}
  </button>
);


export default Button;