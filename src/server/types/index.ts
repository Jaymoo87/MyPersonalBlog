import { Request } from "express";
import { AuthorsTable as AuthorsTable } from "../db/models";

export interface IBlog {
  id?: number;
  authorid: number;
  content: string;
  title: string;
  _created?: Date | string;
  _updated?: Date | string;
}

export interface ITag {
  id?: number;
  tagname: string;
}

export interface IJoinedBlog extends IBlog {
  tags: string[];
  authorname: string;
}

export interface ReqAuthor extends Request {
  user?: AuthorsTable;
}

export interface Payload extends AuthorsTable {
  userid: number;
  email: string;
  role: 1;
}
