import React from "react";
import "./button.scss";

export default function Button({ children, className, onClick, type }) {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
