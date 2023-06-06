import React from "react";

const AnotherComment = (props) => {
  return <p>AnotherComment is {props.title}</p>;
};

AnotherComment.defaultProps = {
  title: "another"
};

export default AnotherComment;
