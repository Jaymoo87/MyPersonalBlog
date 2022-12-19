import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { IBlog } from "../../types";


const BlogCard = () => {
    const { id } = useParams();
    const blogid = Number(id);

    const [blog, setBlogs] = useState<IBlog>();
  
    useEffect(() => {
      fetch(`/api/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => setBlogs(data))
        .catch((e) => alert(e.message));
    }, [id]);
  
    return (
      <div className="d-flex container justify-content-center bg-secondary border-dark shadow p-5">
        <div key={`film-card-${blog?.id}`} className=" d-block col-12 col-md-6 col-sm-12 mt-4">
          <div className="mb-2 card shadow-lg bg-primary border border-info">
            
  
            <h3 className="card-title text-center pt-3 mx-3 ">{blog?.title}</h3>
  
            <h5 className=" m-5 card-text ">{blog?.content}</h5>
            <div className="d-flex justify-content-end mx-2">
              <h6 className="  d-flex card-text fst-italic">Author: {blog?.authorid}</h6>
              
            </div>
            <div className="badge d-flex justify-content-start">
              <Link to="/blogs" className=" shadow-lg border-radius btn btn-sm btn-dark btn-outline-secondary">
                Go Back
              </Link>
              <Link to={`/${blogid}/Edit`} className=" shadow-lg border-radius btn btn-sm btn-dark btn-outline-secondary">
                Edit Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCard;