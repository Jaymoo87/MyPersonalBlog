import { response } from "express";
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams  } from 'react-router-dom';


import Swal from "sweetalert2";
import  { createBrowserHistory } from "history"
import { IBlog } from "../../types";

const AddNewBlog = () => {

    const MAX = 5000
    const [authorid, setAuthorid] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')


    const [tags, setTags] = useState<string>('')
    const [selectedTagId, setSelectedTagID] = useState<number>()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        newBlog();
    }
    const nav = useNavigate();
    const backToBlogs = () => {
        nav('/blogs')
    }
  
   

const newBlog = async () => {
        const blog = {
            
            authorid: authorid,
            title,
            content
        }

    let res = await fetch(`/api/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
        
    })
    if(res.ok) {
        Swal.fire({
            title: 'Success!',
            text: 'Your Blog Has Been Submitted',
            confirmButtonText: 'Cool'
          });
          backToBlogs();
    } else {
     
        Swal.fire({
            title: 'Fuck!',
            icon: 'error',
            text: 'blog not posted! Fail.',
            confirmButtonText: 'not cool'
          });
    }
}



return (
    <div className="container col-8 bg-secondary">
        <div className="form-group">
            <label>Author</label>
            <input 
            type="text"
            className="form-control" 
            placeholder="Your Name"
            value={authorid}
            onChange={(e) => setAuthorid(e.target.value)}
            ></input>
            <label>Title</label>
            <input 
            type="text"
            className="form-control" 
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input>
                <label>Select a Tag</label>
                <select className="form-control">
                    <option>#</option>
                    <option>#</option>
                    <option># sports</option>
                    <option>#</option>
                    <option>#</option>
                </select>
            </div>
            <div className="form-group">
                <label>Submit Blog</label>
                <textarea 
                className="form-control" 
                placeholder="Your Blog Entry Here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className="d-flex justify-content-end">
                <span className="mx-3">{content.length}/{MAX}</span>
                <button
                value="Submit Blog"
                className=" my-3 btn btn-dark rounded " 
                onClick={handleClick}
                >Post</button></div>
            </div>
        </div>
);
}

export default AddNewBlog;