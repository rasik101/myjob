import React from "react";
import { Button } from "components";
import { useNavigate } from "react-router";
import NoApplicantImage from "assets/file.png";

export default function NoPost() {
  const navigate = useNavigate();
  const handlePostAJob = () => {
    navigate("/postjob");
  };

  return (
    <div className=" container no-post">
      <img src={NoApplicantImage} alt="no file" height="90" />
      <p>Your posted jobs will show here!</p>
      <Button onClick={handlePostAJob}>Post a Job</Button>
    </div>
  );
}
