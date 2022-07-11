import * as mysql from "promise-mysql";

async function connection() {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    multipleStatements: true,
  });

  return connection;
}

async function sqlQuery(sql: string): Promise<any> {
  return (await connection()).query(sql);
}

export default sqlQuery;
