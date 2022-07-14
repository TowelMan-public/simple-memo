import * as mysql from "mysql2/promise";
import env from "../env";

var m_connection: mysql.Connection | null = null;

async function connection(): Promise<mysql.Connection> {
  if (m_connection == null) {
    m_connection = await mysql.createConnection({
      host: env().MYSQL_HOST,
      user: env().MYSQL_USER_NAME,
      password: env().MYSQL_PASSWORD,
      database: env().MYSQL_DB_NAME,
      charset: "utf8",
    });
  }

  return m_connection;
}

async function sqlQuery(sql: string, ...value: any): Promise<any> {
  try {
    return await (await connection()).query(sql, [...value]);
  } catch (error) {
    console.log("around db error\n" + error);
    throw error;
  }
}

export default sqlQuery;
