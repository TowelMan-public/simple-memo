import internal from "stream";
import MemoEntity from "../entity/memo";
import sqlQuery from "./connection";

async function createMemoId(validityPeriod: Date): Promise<number> {
  let result = await sqlQuery(
    "INSERT INTO memo_list_owner (owner_validity_period) VALUES(?)",
    validityPeriod
  );

  return result.inserttId as number;
}

async function insertMemoList(memoListOwnerId: number, memo: MemoEntity) {
  await sqlQuery(
    "INSERT INTO memo (memo_list_owner_id, memo_title, memo_content) VALUES(?, ?, ?)",
    memoListOwnerId,
    memo.title,
    memo.content
  );
}

async function validationMemoListId(
  memoListOwnerId: number,
  nowDate: Date
): Promise<boolean> {
  let result = await sqlQuery(
    "SELECT owner_validity_period AS period FROM memo_list_owner WHERE memo_list_owner_id=? AND is_deleted=0",
    memoListOwnerId
  );

  return result[0].period >= nowDate;
}

async function getMemoList(memoListOwnerId: number): Promise<MemoEntity[]> {
  let result = await sqlQuery(
    "SELECT memo_title AS title, memo_content AS content FROM memo WHERE memo_list_owner_id=? AND is_deleted=0",
    memoListOwnerId
  );

  let memoList: MemoEntity[] = [];
  result.forEach((object: any) => {
    memoList.push(new MemoEntity(object));
  });

  return memoList;
}

async function deleteMemoList(memoListOwnerId: number) {
  await sqlQuery(
    "UPDATE memo_list_owner SET is_deleted=1 WHERE memo_list_owner_id=?",
    memoListOwnerId
  );
}
