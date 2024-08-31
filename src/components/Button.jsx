import React from "react";
import "./Button.css";

function Button({ text, link, variant }) {
  return (
    <a href={link} className={`btn ${variant}`}>
      {text}
    </a>
  );
}

export default Button;
