import React from "react";
import "./background.scss";

export default function Background({ component, className }) {
  let bluebackground;
  if (className === "postAJobBackground") {
    bluebackground = "bluebackground";
  }
  return (
    <>
      {component}
      <div className={`navyBlue-background ${className}`}></div>
      <div className={`blue-background ${bluebackground}`}></div>
    </>
  );
}
