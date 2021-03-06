import React, { useState } from "react";

const blogStyle = {
  paddingTop: 10,
  paddingLeft: 2,
  border: "solid",
  borderWidth: 1,
  marginBottom: 5,
};

const Blog = ({ blog, handleLikeBlog, handleRemoveBlog }) => {
  const [expanded, setExpanded] = useState(false);

  const hideWhenExpanded = { display: expanded ? "none" : "" };
  const showWhenExpanded = { display: expanded ? "" : "none" };

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const id = blog.id;
  const currentUser = JSON.parse(
    window.localStorage.getItem("loggedBlogappUser"),
  );

  return (
    <div className="blog" style={blogStyle}>
      <div style={hideWhenExpanded}>
        {blog.title}{" "}
        <button id="blog__show" onClick={toggleExpanded}>
          show
        </button>
      </div>

      <div style={showWhenExpanded}>
        {blog.title}{" "}
        <button className="blog__hide" onClick={toggleExpanded}>
          hide
        </button>
        <br />
        <a href={blog.url}>{blog.url}</a>
        <br />
        {blog.likes}{" "}
        <button className="blog__like" value={id} onClick={handleLikeBlog}>
          like
        </button>
        <br />
        {blog.author}
        <br />
        {currentUser.username === blog.user.username && (
          <button value={id} onClick={handleRemoveBlog}>
            remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
