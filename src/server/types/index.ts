import { Request } from "express";
import { AuthorsTable } from "../db/models";

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

export interface Payload {
  userid: number;
  email: string;
  role: 1;
}

declare global {
  namespace Express {
    interface User extends Payload {}
  }
}
