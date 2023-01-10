import * as express from "express";
import db from "../../db";
import { tokenCheck } from "../../middlewares/auth.mw";

const blogRouter = express.Router();

blogRouter.get("/", async (req, res) => {
  try {
    const blogs = (await db.blogs.getAllBlogs())[0];

    const blogsWithTagArray = blogs.map((b) => {
      const tagArray = b.tags ? (b.tags as unknown as string).split(",") : [];
      return { ...b, tags: tagArray };
    });

    res.json(blogsWithTagArray);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json({ message: "failed to retrieve blogs from server" });
  }
});

blogRouter.get("/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    const blog = (await db.blogs.getOneBlog(id))[0][0];
    blog.tags = blog.tags ? (blog.tags as unknown as string).split(",") : [];

    res.sendStatus(200).json(blog);
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json({ message: "Could Not Retrieve This Blog from the Server" });
  }
});

blogRouter.delete("/:id", tokenCheck, async (req, res) => {
  let id = Number(req.params.id);
  const authorid = req.user!.userid;

  try {
    await db.blogs.deleteBlog(id, authorid);
    res.json({ message: "Blog Deleted" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json(e.sqlmessage || e.message);
  }
});

blogRouter.post("/", tokenCheck, async (req, res) => {
  try {
    const { content, title, selectedTagsArray } = req.body;
    const authorid = req.user!.userid;

    if (!content || !title)
      return res.status(400).json({ message: "You forgot your user id and a message... what are you doing???!" });
    const BlogData = await db.blogs.postBlog(authorid, title, content);

    for await (const tagID of selectedTagsArray as number[]) {
      await db.blogtags.postBlogTags(BlogData.insertId, tagID);
    }

    res.status(201).json({ content: "Blog Posted!", id: BlogData.insertId });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Blog failed to POST on server" });
  }
});

blogRouter.put("/:id", tokenCheck, async (req, res) => {
  let blogid = Number(req.params.id);

  const { content, title, tagIDArray } = req.body;
  const authorid = req.user!.userid;

  if (!authorid || !content || !title)
    return res.status(400).json({ message: "Need to know who you are, what you said and a damn title!" });

  try {
    const BlogToEdit = { authorid, content, title };
    await db.blogs.editBlog(BlogToEdit, blogid, authorid);
    await db.blogtags.deleteBlogTags(blogid);
    for await (const tagID of tagIDArray) {
      await db.blogtags.postBlogTags(blogid, tagID);
    }

    res.status(201).json({ message: "Blog has been updated, try to do it right the first time" });
  } catch (e) {
    console.log(e);
    res.sendStatus(500).json({ message: "Server Failed to Update Blog" });
  }
});

export default blogRouter;
