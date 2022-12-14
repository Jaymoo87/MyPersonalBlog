import React, { useState, useEffect } from "react";

// import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";
import { IBlog } from "../../types";



const Blogs = () => {
    // const { blogid } = useParams()
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  // const catswithballs = require('./catswithballs.png')
  useEffect(() => {
    fetch("/db/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((e) => alert(e.message));
      
  }, []);
  {/* <img
  className="border border-dark rounded-circle"
  style={{ aspectRatio: 2 / 1 }}
  src={blog.movie_banner}
/> */}

return (
  <div className="row col-12 d-flex justify-content-around p-5">
  {blogs.map((blog) => (
    <div
    key={`blog-card-${blog.id}`}
    className=" d-block col-12 col-md-6 col-sm-12 mt-4"
    >
      <div className="mb-2 card shadow-sm bg-secondary">
      <img className="mt-2 shadow-lg card-img-top border border-secondary rounded-pill" style={{ aspectRatio: 2 / 1 }} src='https://media.wired.com/photos/5cc244c9af643e2f373ebb28/125:94/w_2375,h_1786,c_limit/Coding-Becomes-Criminal.jpg' />
        <div className="row card-body"></div>
        <h3 className="card-title text-center mx-3">{blog.title}</h3>

        <p className=" m-5 card-text fw-bold ">{blog.content.substring(0, 120)}...</p>
        <div className="d-flex justify-content-end mx-2">
          <h6 className=" text-info d-flex card-text fst-italic">
            Author: {blog.authorid}
          </h6>
        </div>
      </div>
    </div>
    ))
  }</div>);

};

export default Blogs;