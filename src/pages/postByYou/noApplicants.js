import React from "react";
import NoApplicantImage from "assets/file.png";

export default function NoApplicants() {
  return (
    <div className="noApplicants">
      <img src={NoApplicantImage} alt="no file" height="90" />
      <p>No applications available!</p>
    </div>
  );
}
