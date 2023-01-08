export interface AuthorsTable {
  id?: number;
  email?: string;
  password?: string;
  created_at?: Date;
}

export interface MysqlResponse {
  affectedRows?: number;
  insertID?: number;
}
