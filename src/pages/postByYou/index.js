import React, { useEffect, createContext, useState } from "react";
import NoPost from "./noPost";
import "./postJobByYou.scss";
import Posts from "./posts";
import Home from "assets/home.svg";
import useService from "helper/useService";
import ApplicantsModal from "./applicantsModal";
import { toast } from "react-toastify";

export const ViewApplicationContext = createContext();
export default function PostByYou() {
  const [state, getCall] = useService("get");
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState(null);
  useEffect(() => {
    getCall("/recruiters/jobs");
  }, []);
  const handleShowApplications = (id) => {
    setPostId(id);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setPostId(null);
  };

  useEffect(() => {
    if (state?.error?.data?.message) {
      toast.error(state.error.data.message);
    }
  }, [state.error]);
  return (
    <div className="container  posteByYou">
      <ApplicantsModal show={showModal} closeModal={closeModal} id={postId} />
      <p className="home">
        <img src={Home} alt="home" height="15" style={{ marginRight: "6px" }} />
        Home
      </p>
      <h1 className="title">Job Post By You</h1>
      {state?.data == null || state?.data?.message === "No jobs posted" ? (
        <NoPost />
      ) : (
        <ViewApplicationContext.Provider value={{ handleShowApplications }}>
          <Posts posts={state?.data?.data} />
        </ViewApplicationContext.Provider>
      )}
    </div>
  );
}
