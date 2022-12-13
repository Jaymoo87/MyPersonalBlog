import * as express from 'express';
import db from './db'
import blogs from './db/blogs'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get("/db/blogs", async (req, res) => {
  
    try {
      res.json(await db.blogs.getAllBlogs());
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.get("/db/blogs/:id", async (req, res) => {
    let id = Number(req.params.id);
    try {
     res.json((await db.blogs.getOneBlog(id))[0]);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.delete("/db/blogs/:id", async (req, res) => {
    let id = Number(req.params.id);
    try {
      res.json((await db.blogs.deleteBlog(id))[0]);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });



  router.post("/", async(req, res) => {
    try{  
    const { authorid, content, title } = req.body;
   
    if(!content || !authorid || !title) return res.status(400).json({ message: "You forgot your user id and a message... what are you doing???!"})
    const BlogData = await blogs.postBlog(authorid, title, content)
   //  const NewChirpID = ChirpData.insertId
    
   
    res.status(201).json({content: "it worked!", id: 3})
   
     } catch (e) {
       console.log(e);
       res.sendStatus(500);
     }
   });

   router.put('/db/blogs/:id', async (req, res) => {
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



export default router;