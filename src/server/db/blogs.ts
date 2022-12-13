import { Query } from "./index"

export const getAllBlogs = async () => Query<string[]>('SELECT * from blogs');
export const getOneBlog = async (blogid: number) => Query<string[]>('SELECT * FROM blogs WHERE id=?', [blogid]);
export const postBlog = async (authorid: string, title: string, content: string) => Query("INSERT INTO blogs (authorid, title, content) VALUES (?, ?, ?)", [authorid, title, content]);
export const deleteBlog = async (blogid: number) => Query('DELETE FROM blogs WHERE id=?', [blogid])





export default {
    getAllBlogs,
    getOneBlog,
    postBlog,
    deleteBlog
}