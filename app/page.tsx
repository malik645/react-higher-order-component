"use client";
import React from "react";

import Comments from "../components/Comments";
import AnotherComment from "../components/AnotherComment";
import BlogPost from "../components/BlogPost";
import hoc from "../components/HOC";

const NewComments = hoc(Comments, { title: "login" });
const AnotherComments = hoc(AnotherComment, {
  title: "Another Person login",
});

export default function Home() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <NewComments />
      <AnotherComments />
      <BlogPost />
    </div>
  );
}
