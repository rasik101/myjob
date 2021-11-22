import React from "react";
import "./card.scss";

export default function Card({ heading, description }) {
  return (
    <article className="card">
      <h3>{heading}</h3>
      <p>{description}</p>
    </article>
  );
}
