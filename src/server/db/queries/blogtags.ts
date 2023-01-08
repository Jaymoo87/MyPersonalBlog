import { IBlog, IJoinedBlog, ITag } from "../../types";
import { Query } from "../index";
import * as mysql from "mysql";

const postBlogTags = async (blogid: number, tagid: number) =>
  Query("INSERT INTO blogtags (blogid, tagid) VALUES (?,?)", [blogid, tagid]);
const deleteBlogTags = async (blogid: number) => Query("DELETE FROM blogtags WHERE blogid=?", [blogid]);

const getAllTags = async () => Query<ITag[]>("SELECT * from tags");

export default {
  postBlogTags,
  deleteBlogTags,
  getAllTags,
};
