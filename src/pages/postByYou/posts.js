import React from "react";
import "./postJobByYou.scss";
import Post from "./post";

export default function Posts({ posts }) {
  return (
    <div className="posts_container">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
