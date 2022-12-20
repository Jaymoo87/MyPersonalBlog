
import e from "express";
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams  } from 'react-router-dom';


import Swal from "sweetalert2";




const EditBlog = () => {
    const nav = useNavigate();
    const backToBlogs = () => {
        nav('/blogs')
    }
    
    const MAX = 5000
    const { id } = useParams();
    const [authorid, setAuthorid] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [tags, setTags] = useState<string>('')
    const [selectedTagId, setSelectedTagID] = useState<number>()
    
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
    
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        blogToEdit();
    }
    
    const handleDeleteBlog = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
                    Swal.fire({
                        backdrop:`#5cbecf6e`,
                        imageUrl: "https://media1.giphy.com/media/5PiIuCHlkQ58Y/giphy.gif?cid=ecf05e47pb9pnypw8a44td6ky0o63ezynrfiueg4maf1ulqe&rid=giphy.gif&ct=g",
                        imageWidth: 400,
                        imageHeight: 200,
                        color: '#13101c',             
                        customClass: 'swal-overlay' ,             
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        
                        showCancelButton: true,
                        confirmButtonColor: 'btn btn-danger',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                          if (result.isConfirmed) {
                             fetch(`/api/blogs/${id}`, {method: "DELETE"})
                                  .then(res => {
                                      if (!res.ok) {
                                          Swal.fire({
                                              title: 'Fuck!',
                                              icon: 'error',
                                              text: 'blog not Deleted! Fail.',
                                              confirmButtonText: 'not cool'
                                          });
                                         
                                } else {
                                    Swal.fire(
                                        'Deleted!',
                                        "Why Have You Wasted Everyone's Time?.",
                                        'success'
                                        )
                                        .then(() => nav('/blogs'))
                                }
                        
                      })
            }});
             
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
            
                <label>Edit Blog</label>
                
                <textarea  style={{resize: 'none'}} rows={50} className=" col-12 rounded bg-blogbg  card-text " 
                placeholder= "Blog Entry"
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea >
                <div className="d-flex justify-content-end">
                <span className="mx-3">{content.length}/{MAX}</span>
                <button
                value="Submit Blog"
                className=" my-3 btn btn-dark rounded btn-outline-primary " 
                onClick={handleClick}
                >Submit Edit</button>
                <button
                value="Submit Blog"
                className=" my-3 btn btn-danger rounded btn-outline-primary " 
                onClick={handleDeleteBlog}
                >Delete Blog</button>
            </div>
        </div>
);


}
export default EditBlog;