import React from "react";

const Button = ({ text, className }) => (
  <button className={`px-4 py-2 rounded ${className}`}>{text}</button>
);

export default Button;
