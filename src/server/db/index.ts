import * as mysql from 'mysql';

import config from "../config";
import blogs from './blogs'
import blogtags from './blogtags';
import donate from "../routes/donate"


const pool = mysql.createPool(config.mysql)

export const Query = <T = mysql.OkPacket>  (query: string, values: unknown[] = []) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results);
        })
    })
}

export default {
    blogtags,
    blogs,
    donate
}