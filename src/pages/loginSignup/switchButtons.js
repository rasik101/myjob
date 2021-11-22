import React from "react";
import "./loginSignup.scss";
import { Button } from "components";

export default function SwitchButtons({ isRecruiter, setRecruiter }) {
  const handleSwitch = () => setRecruiter(!isRecruiter);

  return (
    <div className="switchButton">
      <p>I’m a*</p>
      <div className="buttonContainer">
        <Button
          className={!isRecruiter && "activeButton"}
          onClick={handleSwitch}
        >
          Recruiter
        </Button>
        <Button
          className={isRecruiter && "activeButton"}
          onClick={handleSwitch}
        >
          Candidate
        </Button>
      </div>
    </div>
  );
}
