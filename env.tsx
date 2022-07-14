type Env = {
  MYSQL_HOST: string;
  MYSQL_DB_NAME: string;
  MYSQL_USER_NAME: string;
  MYSQL_PASSWORD: string;
};

const productionEnv: Env = {
  MYSQL_HOST: "mysql",
  MYSQL_DB_NAME: "simple-memo",
  MYSQL_USER_NAME: "simple-memo-root",
  MYSQL_PASSWORD: "password",
};

const testEnv: Env = {
  MYSQL_HOST: "mysql",
  MYSQL_DB_NAME: "test",
  MYSQL_USER_NAME: "tester",
  MYSQL_PASSWORD: "password",
};

let isTest = false;

export function setTestModeToEnv() {
  isTest = true;
}

export default function env(): Env {
  if (isTest) {
    return testEnv;
  } else {
    return productionEnv;
  }
}
