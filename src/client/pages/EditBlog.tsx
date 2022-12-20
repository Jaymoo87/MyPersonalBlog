
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams  } from 'react-router-dom';


import Swal from "sweetalert2";




const EditBlog = () => {
    
    const MAX = 5000
    const { id } = useParams();
    const [authorid, setAuthorid] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setContent(data.content)
                setAuthorid(data.authorid)
            })
            .catch(console.error)
    },[])

    const [tags, setTags] = useState<string>('')
    const [selectedTagId, setSelectedTagID] = useState<number>()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        blogToEdit();
    }
    const nav = useNavigate();
    const backToBlogs = () => {
        nav('/blogs')
    }
    
   

const blogToEdit = async () => {
        const blog = {
            
            authorid,
            title,
            content
        }


       

    let res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
        
    })
    if(res.ok) {
        Swal.fire({
            title: 'Success!',
            icon: 'success',
            text: 'Your Blog Has Been Updated',
            confirmButtonText: 'Do It Right The First Time!'
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
            <label>Edit Title</label>
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
                <label>Edit Blog</label>
                <div >
                <textarea  style={{resize: 'none'}} rows={50} className=" col-12 rounded bg-blogbg  card-text " 
                placeholder= "Blog Entry"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea ></div>
                <div className="d-flex justify-content-end">
                <span className="mx-3">{content.length}/{MAX}</span>
                <button
                value="Submit Blog"
                className=" my-3 btn btn-dark rounded btn-outline-primary " 
                onClick={handleClick}
                >Submit Edit</button></div>
            </div>
        </div>
);
}

export default EditBlog;