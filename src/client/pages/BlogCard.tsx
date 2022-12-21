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
    <div className="d-flex container justify-content-center bg-secondary border-dark shadow p-2">
      <div key={`film-card-${blog?.id}`} className=" d-flex justify-content-center col-12 col-sm-12 mt-4">
        <div className="d-flex mb-2 col-10 card shadow-lg bg-primary border border-info">
          <h3 className="card-title text-center pt-3 mx-3 ">{blog?.title}</h3>

          <textarea
            readOnly
            style={{ resize: "none" }}
            rows={20}
            defaultValue={blog?.content}
            className=" rounded bg-blogbg m-5 card-text "
          ></textarea>
          <div className="d-flex justify-content-end mx-2">
            <h6 className="  d-flex card-text fst-italic">Author: {blog?.authorid}</h6>
          </div>
          <div className="badge d-flex justify-content-start">
            <Link to="/blogs" className=" m-3 shadow-lg border-radius btn btn-sm btn-dark btn-outline-primary">
              Go Back
            </Link>
            <Link
              to={`/blogs/${id}/edit`}
              className=" m-3 shadow-lg border-radius btn btn-sm btn-dark btn-outline-primary"
            >
              Edit Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
