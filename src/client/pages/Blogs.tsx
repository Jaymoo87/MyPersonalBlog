import React, { useState, useEffect } from "react";

// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { IBlog, IJoinedBlog } from "../../server/types";
import { SwalError } from "../services/swal-error-handler";

const Blogs = () => {
  const [blogs, setBlogs] = useState<IJoinedBlog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch(SwalError);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {blogs.map((blog) => (
          <div key={`blog-card-${blog.id}`} className="d-flex col-4  mt-4">
            <div className="mb-2 card align-items-stretch shadow-lg bg-primary border border-dark">
              <img
                className=" rounded-pill p-1"
                style={{ aspectRatio: 2 / 1 }}
                src="https://media.wired.com/photos/5cc244c9af643e2f373ebb28/125:94/w_2375,h_1786,c_limit/Coding-Becomes-Criminal.jpg"
              />
              <div className="row card-body"></div>
              <h3 className="card-title text-center mx-2">{blog.title}</h3>

              <p className=" m-5 card-text text-secondary fw-bold ">{blog.content.substring(0, 250)}...</p>
              <div className="d-flex justify-content-between mx-2">
                <h6 className=" text-info d-flex card-text fst-italic">
                  <span className="text-info fw-bolder"> Author - </span> {blog.authorname}
                </h6>
                <Link to={`/blogs/${blog.id}`} className="btn btn-sm d-flex shadow btn-dark btn-outline-primary mb-4">
                  Read Blog
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
