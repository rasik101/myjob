import React from "react";
import "./home.scss";
import { Card } from "components";

export default function WhyUs() {
  return (
    <div className="whyUs">
      <h3>Why us</h3>
      <div className="cards_Container">
        <Card
          heading="Get more visibility"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          heading="Organize your candidates"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
        <Card
          heading="Verify their abilities"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        />
      </div>
    </div>
  );
}
