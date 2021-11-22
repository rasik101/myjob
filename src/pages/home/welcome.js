import React from "react";
import "./home.scss";
import Banner from "assets/banner.jpeg";
import Button from "components/button";
import { useNavigate } from "react-router";

export default function Welcome() {
  const navigate = useNavigate();
  const handleClick = () => {
    let isAuthenticated = localStorage.getItem("token");
    if (isAuthenticated) {
      navigate("/postbyyou");
    } else {
      navigate("/loginSignup");
    }
  };

  return (
    <div className="welcome-container">
      <div>
        <h1>
          Welcome to My<span>Jobs</span>
        </h1>
        <Button className="get_started_Button" onClick={handleClick}>
          Get Started
        </Button>
      </div>
      <img src={Banner} alt="banner_image" />
    </div>
  );
}
