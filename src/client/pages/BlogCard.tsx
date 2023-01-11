import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { IBlog, ITag } from "../../server/types";

const BlogCard = () => {
  const { id } = useParams();
  const blogid = Number(id);

  const [blog, setBlogs] = useState<IBlog>();
  // const [tags, setTags] = useState<ITag>();
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedTagId, setSelectedTagID] = useState<number>(0);

  useEffect(() => {
    fetch(`/api/tags`)
      .then((res) => res.json())
      .then((data) => setTags(data));

    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setBlogTags(data.tags as string[]);
      })

      .catch((e) => alert(e.message));
  }, [id]);

  useEffect(() => {
    if (!tags.length) return;
    const tagNameArray = tags.filter((t) => blogTags.includes(t.tagname));
    setSelectedTagID(tagNameArray[0]?.id || 0);
    console.log({ tags, blogTags, tagNameArray });
  }, [tags, blogTags]);

  return (
    <div className="d-flex container justify-content-center bg-secondary border-dark shadow p-2">
      <div key={`film-card-${blog?.id}`} className=" d-flex justify-content-center col-12 col-sm-12 mt-4">
        <div className="d-flex mb-2 col-10 card shadow-lg bg-blogcardbg border border-info">
          <h3 className=" rounded card-title text-center p-3 m-3 ">{blog?.title}</h3>
          <div className="col-12 container d-flex justify-content-center">
            {blogTags.map((bt) => (
              <h6 key={bt} className=" m-2 badge text-bg-dark d-flex fst-italic col-2 justify-content-center">
                {bt}
              </h6>
            ))}
          </div>

          <textarea
            readOnly
            style={{ resize: "none", padding: 3, fontSize: 18 }}
            rows={30}
            defaultValue={blog?.content}
            className=" p-3 rounded bg-blogbg m-5 card-text "
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
