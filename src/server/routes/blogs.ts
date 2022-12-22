import * as express from 'express';
import db from '../db'
import blogs, { getAllTags } from '../db/blogs'


const blogRouter = express.Router();


blogRouter.get("/", async (req, res) => {
   
    try {

        const blogs = (await db.blogs.getAllBlogs())[0]

        const blogsWithTagArray = blogs.map(b => {
            const tagArray = (b.tags ?  (b.tags as unknown as string).split(',') : [])
            return {...b, tags: tagArray}
        })

        res.json(blogsWithTagArray);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  blogRouter.get("/:id", async (req, res) => {
    let id = Number(req.params.id);
    try {
      const blog =(await db.blogs.getOneBlog(id))[0][0]
      blog.tags =  (blog.tags ?  (blog.tags as unknown as string).split(',') : [])

     res.json(blog);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  blogRouter.delete("/:id", async (req, res) => {
    let id = Number(req.params.id);
    try {
      res.json((await db.blogs.deleteBlog(id)));
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });



  blogRouter.post("/", async(req, res) => {
    try{  
    const { authorid, content, title,  } = req.body;
   
    if(!content || !authorid || !title) return res.status(400).json({ message: "You forgot your user id and a message... what are you doing???!"})
    const BlogData = await blogs.postBlog(authorid, title, content)
   
    
   
    res.status(201).json({content: "it worked!", id: 3})
   
     } catch (e) {
       console.log(e);
       res.sendStatus(500);
     }
   });

   blogRouter.put('/:id', async (req, res) => {
    let blogid = Number(req.params.id);
  
    const { authorid, content, title, id } = req.body;
  
    if (!authorid || !content || !title) return res.status(400).json({ message: "Need to know who you are and what you said and a damn title!" });
  
          try {
            const BlogToEdit = { authorid, content, title }
            await db.blogs.editBlog(BlogToEdit, blogid)
            res.status(201).json({ message: "Blog has been updated, try to do it right the first time" });
          } catch (e) {
            console.log(e);
            res.sendStatus(500);
          }
  })



export default blogRouter;