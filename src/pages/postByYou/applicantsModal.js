import React, { useEffect, useState } from "react";
import "./postJobByYou.scss";
import NoApplicants from "./noApplicants";
import Close from "assets/close.png";
import ApplicantCard from "./applicantCard";
import useService from "helper/useService";
export default function ApplicantsModal({ show, id, closeModal }) {
  const [state, getCall] = useService("get");
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    if (id) getCall(`recruiters/jobs/${id}/candidates`);
  }, [id]);
  useEffect(() => {
    if (state.data) {
      setApplicants(state.data);
    }
  }, [state.data]);
  return show ? (
    <div className="modalContainer" onClick={closeModal}>
      <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heading">
          <h3>Applicants for this job</h3>
          <img src={Close} onClick={closeModal} height="15" alt="close" />
        </div>
        <p>Total Applicants</p>
        {applicants.length === 0 ? (
          <NoApplicants />
        ) : (
          <div className="applicants-grid">
            {applicants.map((applicant) => (
              <ApplicantCard applicant={applicant} key={applicant.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
}
