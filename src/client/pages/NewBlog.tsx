import { response } from "express";
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import ReactSelect, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";

import Swal from "sweetalert2";
import { IJoinedBlog, ITag } from "../../server/types";

const AddNewBlog = () => {
  const MAX = 5000;
  const [authorid, setAuthorid] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [options, setOptions] = useState<MultiValue<{ value: number; label: string }>>();
  const [tags, setTags] = useState<ITag[]>();
  const [selectedTags, setSelectedTags] = useState<MultiValue<{ value: number; label: string }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    newBlog();
  };
  const nav = useNavigate();
  const backToBlogs = () => {
    nav("/blogs");
  };

  useEffect(() => {
    fetch(`/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        setOptions(data.map((t: ITag) => ({ value: t.id!, label: t.tagname })));
      });
  }, []);

  const newBlog = async () => {
    const selectedTagsArray = selectedTags.map((st) => st.value);

    const blog = {
      selectedTagsArray,
      authorid,
      title,
      content,
    };

    let res = await fetch(`/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    if (res.ok) {
      Swal.fire({
        title: "Success!",
        text: "Your Blog Has Been Submitted",
        confirmButtonText: "Cool",
      });
      backToBlogs();
    } else {
      Swal.fire({
        title: "Fuck!",
        icon: "error",
        text: "blog not posted! Fail.",
        confirmButtonText: "not cool",
      });
    }
  };

  return (
    <div className="container rounded col-8 bg-secondary">
      <div className="form-group">
        <label className="text-dark">Author</label>
        <input
          type="text"
          className="form-control bg-blogbg"
          placeholder="Your Name"
          value={authorid}
          onChange={(e) => setAuthorid(e.target.value)}
        ></input>
        <label className="text-dark">Title</label>
        <input
          type="text"
          className="form-control bg-blogbg"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label className="text-dark">Select a Tag</label>
        <ReactSelect
          isMulti
          onChange={(e) => setSelectedTags(e as MultiValue<{ value: number; label: string }>)}
          options={options}
          isSearchable
          components={makeAnimated()}
          placeholder="Pick Some Hash"
        ></ReactSelect>
        {/* onChange={(e) => setOptions(e as { value: number; label: string }[])} */}
      </div>
      <div className="form-group">
        <label className="text-dark">Submit Blog</label>
        <textarea
          maxLength={MAX}
          style={{ resize: "none" }}
          rows={20}
          className="form-control bg-blogbg"
          placeholder="Your Blog Entry Here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="d-flex justify-content-end">
          <span className="mx-3 text-dark">
            {content.length}/{MAX}
          </span>
          <button value="Submit Blog" className=" my-3 btn btn-dark rounded " onClick={handleClick}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewBlog;
