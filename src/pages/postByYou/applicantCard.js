import React from "react";

export default function ApplicantCard({ applicant }) {
  const { email, skills, name } = applicant;
  const Avatar = name.split(" ")[0][0].toUpperCase();

  return (
    <div className="applicantCard">
      <div className="avatarContainer">
        <div className="avatar">{Avatar}</div>
        <div>
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
      </div>
      <p className="skills">Skills</p>
      <p className="skillsValue">{skills}</p>
    </div>
  );
}
