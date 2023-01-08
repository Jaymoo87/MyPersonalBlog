import { Query } from "..";
import { MysqlResponse, AuthorsTable } from "../models";

const find = (column: string, value: string) =>
  Query<AuthorsTable[]>("SELECT * FROM authors WHERE ?? = ?", [column, value]);
const insert = (newAuthor: { email: string; password: string }) =>
  Query<MysqlResponse>("INSERT INTO authors SET ?", [newAuthor]);

export default {
  find,
  insert,
};
