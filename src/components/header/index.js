import React, { useState } from "react";
import "./header.scss";
import Button from "../button";
import { useNavigate } from "react-router-dom";
export default function Header() {
  let navigate = useNavigate();
  const [isLogout, setIsLogOut] = useState(false);
  const handleClick = () => {
    navigate("/loginSignup");
  };
  const handleLogo = () => {
    navigate("/");
  };
  let isAuthenticated = localStorage.getItem("token");
  const toggleLogin = () => {
    setIsLogOut(!isLogout);
  };
  const handlePostJob = () => {
    navigate("/postJob");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="header">
      <h2 onClick={handleLogo}>
        <span>My</span>Jobs
      </h2>
      <div>
        {isAuthenticated ? (
          <div className="header-right">
            <p onClick={handlePostJob}>Post a Job</p>
            <div className="avatar" onClick={toggleLogin}>
              R
            </div>
            {isLogout && (
              <div className="logout" onClick={handleLogout}>
                Logout
              </div>
            )}
          </div>
        ) : (
          <Button onClick={handleClick}>Login/Signup</Button>
        )}
      </div>
    </header>
  );
}
