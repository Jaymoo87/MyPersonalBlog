import React, { useState, useEffect } from "react";

// import { useParams } from "react-router-dom";


import { Link } from "react-router-dom";
import { IBlog } from "../../types";



const Blogs = () => {
    
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  
  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((e) => alert(e.message));
      
  }, []);

return (
  <div className="row col-12 d-flex justify-content-around p-5">
  {blogs.map((blog) => (
    <div
    key={`blog-card-${blog.id}`}
    className=" d-block col-12 col-md-6 col-sm-12 mt-4"
    >
      <div className="mb-2 card shadow-lg bg-primary border border-info">
      <img className="border border-primary rounded-pill" style={{ aspectRatio: 2 / 1 }} src='https://media.wired.com/photos/5cc244c9af643e2f373ebb28/125:94/w_2375,h_1786,c_limit/Coding-Becomes-Criminal.jpg' />
        <div className="row card-body"></div>
        <h3 className="card-title text-center mx-3">{blog.title}</h3>

        <p className=" m-5 card-text fw-bold ">{blog.content.substring(0, 100)}...</p>
        <div className="d-flex justify-content-between mx-2">
          <h6 className=" text-info d-flex card-text fst-italic">
           <span className="text-success fw-bolder"> Author - </span> {blog.authorid}
          </h6>
          <Link to={`/blogs/${blog.id}`} className="btn btn-sm d-flex shadow btn-dark btn-outline-primary mb-4">Read Blog</Link>
        </div>
      </div>
    </div>
    ))
  }</div>);

};

export default Blogs;