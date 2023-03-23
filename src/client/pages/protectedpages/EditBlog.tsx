import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactSelect, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";

import Swal from "sweetalert2";
import { IJoinedBlog, ITag } from "../../../server/types";
import { DELETE, PUT, TOKEN_KEY } from "../../services/api-service";
import { SwalError, SwalSuccess } from "../../services/swal-error-handler";

type MultiValueSelect = MultiValue<{ value: number; label: string }>;

const EditBlog = () => {
  const nav = useNavigate();

  const MAX = 5000;
  const { id } = useParams();

  const token = localStorage.getItem(TOKEN_KEY);
  let userId: any = null;

  const [authorid, setAuthorid] = useState<number>();
  const [authorname, setAuthourName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [selectedTagIds, setSelectedTagIDs] = useState<MultiValueSelect>([]);
  const [blogTags, setBlogTags] = useState<string[]>([]);
  const [options, setOptions] = useState<MultiValueSelect>();

  if (token) {
    const [header, payload, signature] = token.split(".");
    const decoded = atob(payload);
    const { userid } = JSON.parse(decoded);
    userId = userid;
  }

  useEffect(() => {
    if (authorid) {
      if (authorid !== userId) {
        SwalError(new Error("Get Back Bitch, This Ain't Your Shit!"));
        nav(`/blogs/${id}`);
      }
    }
  }, [authorid]);

  useEffect(() => {
    fetch(`/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        setOptions(data.map((t: ITag) => ({ value: t.id!, label: t.tagname })));
      });
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data: IJoinedBlog) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthorid(data.authorid);
        setAuthourName(data.authorname);
        setBlogTags(data.tags as string[]);
      })
      .catch((error) => SwalError(error));
  }, []);

  useEffect(() => {
    if (!tags.length) return;
    const tagNameArray = tags.filter((t) => blogTags.includes(t.tagname));
    const tNAT = tagNameArray.map((ht) => ({ value: ht.id!, label: ht.tagname }));
    setSelectedTagIDs(tNAT);
    console.log({ tags, blogTags, tagNameArray, tNAT });
  }, [tags, blogTags]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    blogToEdit();
  };

  const handleDeleteBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const tagIDArray = selectedTagIds.map((st) => st.value);
    const blog = {
      tagIDArray,
      authorid,
      title,
      content,
    };
    Swal.fire({
      backdrop: `#5cbecf6e`,
      imageUrl:
        "https://media1.giphy.com/media/5PiIuCHlkQ58Y/giphy.gif?cid=ecf05e47pb9pnypw8a44td6ky0o63ezynrfiueg4maf1ulqe&rid=giphy.gif&ct=g",
      imageWidth: 400,
      imageHeight: 200,
      color: "#13101c",
      customClass: "swal-overlay",
      title: "Are you sure?",
      text: "Has This ALL Been A Waste Of Time?!",

      showCancelButton: true,
      confirmButtonColor: "btn btn-danger",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          DELETE(`/api/blogs/${id}`, blog);
          SwalSuccess("Deleted!");
          nav("/blogs");
        } catch (error) {
          SwalError(error);
        }
      }
    });
  };

  const blogToEdit = async () => {
    const tagIDArray = selectedTagIds.map((st) => st.value);
    const blog = {
      tagIDArray,
      authorid,
      title,
      content,
    };
    try {
      await PUT(`/api/blogs/${id}`, blog);
      SwalSuccess("Success");
      nav("/blogs");
    } catch (error) {
      SwalError(error);
    }
  };

  return (
    <div className="container col-8 bg-primary rounded">
      <div className="form-group">
        <label className="text-dark">Author</label>
        <input
          readOnly
          disabled
          style={{ userSelect: "none", cursor: "none" }}
          type="text"
          className="form-control bg-blogbg"
          placeholder="Your Name"
          value={authorname}
        ></input>
        <label className="text-dark">Edit Title</label>
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
          value={selectedTagIds}
          options={options}
          onChange={(e) => setSelectedTagIDs(e as MultiValueSelect)}
          isSearchable
          components={makeAnimated()}
          placeholder="Pick Some Hash"
        ></ReactSelect>
      </div>
      <label className="text-dark">Edit Blog</label>
      <textarea
        style={{ resize: "none" }}
        maxLength={MAX}
        rows={50}
        className=" col-12 rounded bg-blogbg  card-text "
        placeholder="Blog Entry"
        defaultValue={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>{" "}
      <span className="d-flex justify-content-end text-light mx-3">
        {content.length}/{MAX}
      </span>
      {authorid === userId ? (
        <div className="d-flex justify-content-start">
          <button value="Submit Blog" className=" m-3 btn btn-dark rounded btn-outline-info " onClick={handleClick}>
            Submit Edit
          </button>
          <button
            value="Submit Blog"
            className=" m-3 btn btn-danger rounded btn-outline-info "
            onClick={handleDeleteBlog}
          >
            Delete Blog
          </button>
        </div>
      ) : (
        <button>Stop, You Suck, This Isn't Yours!</button>
      )}
    </div>
  );
};
export default EditBlog;
