import * as mysql from "promise-mysql";

let m_connection: mysql.Connection | null = null;

async function connection() {
  if (m_connection == null) {
    m_connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER_NAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      multipleStatements: true,
      timezone: "jst",
    });
  }

  return m_connection;
}

async function sqlQuery(sql: string, ...value: any): Promise<any> {
  return (await connection()).query(sql, ...value);
}

export default sqlQuery;
