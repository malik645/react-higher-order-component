import React from "react";

const Comments = (props) => {
  console.log("comment props", props);
  return <p>Comment is {props.title}</p>;
};

Comments.defaultProps = {
  title: "not logged in"
};

export default Comments;
