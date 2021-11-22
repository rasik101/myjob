import React, { useContext } from "react";
import "./postJobByYou.scss";
import { Button } from "components";
import Location from "assets/location.png";
import { ViewApplicationContext } from "./index";
export default function Post({ post }) {
  const { description, location, title, id } = post;
  const { handleShowApplications } = useContext(ViewApplicationContext);
  const handleApplications = () => {
    handleShowApplications(id);
  };

  return (
    <article className="post">
      <p className="post_heading">{title}</p>
      <p className="post_description">{description}</p>
      <div className="bottomContainer">
        <p>
          <img src={Location} height="15px" alt="Location" />
          {location}
        </p>
        <Button className="viewApplication" onClick={handleApplications}>
          View Application
        </Button>
      </div>
    </article>
  );
}
