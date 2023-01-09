import * as mysql from "mysql";

import config from "../config";
import blogs from "./queries/blogs";
import blogtags from "./queries/blogtags";
import donate from "../routes/api/donate";
import authors from "./queries/authors";

const pool = mysql.createPool(config.mysql);

export const Query = <T = mysql.OkPacket>(query: string, values: unknown[] = []) => {
  return new Promise<T>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  blogtags,
  blogs,
  donate,
  authors,
};
