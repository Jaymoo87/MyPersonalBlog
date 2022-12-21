import { IBlog, IJoinedBlog, ITag } from "../../types";
import { Query } from "./index"
import * as mysql from 'mysql'

export const getAllBlogs = async () => Query<[IJoinedBlog[], mysql.OkPacket]>('CALL spBlogsWithTags()');
export const getOneBlog = async (blogid: number) => Query<[IJoinedBlog[], mysql.OkPacket]>('CALL spBlogWithTags(?)', [blogid]);
export const postBlog = async (authorid: number, title: string, content: string) => Query("INSERT INTO blogs (authorid, title, content) VALUES (?, ?, ?)", [authorid, title, content]);
export const deleteBlog = async (blogid: number) => Query('DELETE FROM blogs WHERE id=?', [blogid]);
export const editBlog = async (blogToEdit: IBlog, id: number) => Query(`UPDATE blogs SET ? WHERE id = ?`, [blogToEdit, id]);


export const getAllTags = async () => Query<ITag[]>('SELECT * from tags');


export default {
    getAllBlogs,
    getOneBlog,
    postBlog,
    deleteBlog,
    editBlog,
    getAllTags
}