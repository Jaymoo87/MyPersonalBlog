import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { IBlog } from "../../types";


const BlogCard = () => {
    const { blogid } = useParams();
    const [blog, setBlogs] = useState<IBlog>();
  
    useEffect(() => {
      fetch(`/api/blogs/${blogid}`)
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((e) => alert(e.message));
    }, [blogid]);
  
    return (
      <div className="d-flex container justify-content-center bg-secondary border-dark shadow p-5">
        <div key={`film-card-${blog?.id}`} className=" d-block col-12 col-md-6 col-sm-12 mt-4">
          <div className="mb-2 card shadow-lg bg-primary border border-info">
            <img className="border border-primary rounded-pill" style={{ aspectRatio: 2 / 1 }} src='https://media.wired.com/photos/5cc244c9af643e2f373ebb28/125:94/w_2375,h_1786,c_limit/Coding-Becomes-Criminal.jpg' />
  
            <h3 className="card-title text-center mx-3 ">{blog?.title}</h3>
  
            <h5 className=" m-5 card-text ">{blog?.content}</h5>
            <div className="d-flex justify-content-end mx-2">
              <h6 className="  d-flex card-text fst-italic">Author: {blog?.authorid}</h6>
              
            </div>
            <div className="badge d-flex justify-content-start">
              <Link to="/blogs" className=" shadow-lg border-radius btn btn-sm btn-dark btn-outline-secondary">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;