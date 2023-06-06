import React from "react";

const posts = [1,2,3,4,5,6];

const BlogPost = () => {
  return (
    <div>
      {posts.map((post, index) => {
        return (<p key={index}>{post}</p>);
      })}
    </div>
  );
};

export default BlogPost;
