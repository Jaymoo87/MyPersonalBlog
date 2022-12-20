
import React, { useEffect, useState } from "react";
import { json, Link, useNavigate, useParams  } from 'react-router-dom';

import Swal from "sweetalert2";

const DeleteBlog = async () => {
    
    const { id } = useParams();
   
        useEffect(() =>{
            fetch(`api/blogs/${id}`, {method: "DELETE"})
            .then(() => Swal.fire({
                
                        title: 'Success?!?',
                        icon: 'success',
                        text: 'Your Blog Has Been Deleted',
                        confirmButtonText: "Why Have You Wasted Everyone's Time"})
        )
        .catch(() => {
            Swal.fire({
                        title: 'Fuck!',
                        icon: 'error',
                        text: 'blog not Deleted! Fail.',
                        confirmButtonText: 'Guess It Is What It Is...;)'
                      });
        } )
    })
      
    
    
//     let res = await fetch(`/api/blogs/${id}`, {
//         method: "DELETE",  
//     })
//     if(res.ok) {
//         Swal.fire({
//             title: 'Success?!?',
//             icon: 'success',
//         text: 'Your Blog Has Been Deleted',
//         confirmButtonText: "Why Have You Wasted Everyone's Time"
//     });
   
    
// } else {
    
//     Swal.fire({
//         title: 'Fuck!',
//         icon: 'error',
//         text: 'blog not Deleted! Fail.',
//         confirmButtonText: 'Guess It Is What It Is...;)'
//       });
// }
 }

export default DeleteBlog;