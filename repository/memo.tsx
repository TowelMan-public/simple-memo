import internal from "stream";
import MemoEntity from "../entity/memo";
import sqlQuery from "./connection";

export async function createMemoId(validityPeriod: Date): Promise<number> {
  return (
    await sqlQuery(
      "INSERT INTO memo_list_owner (owner_validity_period) VALUES(?)",
      validityPeriod
    )
  )[0].insertId;
}

export async function insertMemo(memoListOwnerId: number, memo: MemoEntity) {
  await sqlQuery(
    "INSERT INTO memo (memo_list_owner_id, memo_title, memo_content) VALUES(?, ?, ?)",
    memoListOwnerId,
    memo.title,
    memo.content
  );
}

export async function validationMemoListId(
  memoListOwnerId: number,
  nowDate: Date
): Promise<boolean> {
  let result = (
    await sqlQuery(
      "SELECT owner_validity_period AS period FROM memo_list_owner WHERE memo_list_owner_id=? AND is_deleted=0",
      memoListOwnerId
    )
  )[0];

  return result[0].period >= nowDate;
}

export async function getMemoList(
  memoListOwnerId: number
): Promise<MemoEntity[]> {
  let result = (
    await sqlQuery(
      "SELECT memo_title AS title, memo_content AS content FROM memo WHERE memo_list_owner_id=?",
      memoListOwnerId
    )
  )[0];

  let memoList: MemoEntity[] = [];
  result.forEach((object: any) => {
    memoList.push(new MemoEntity(object));
  });

  return memoList;
}

export async function deleteMemoList(memoListOwnerId: number) {
  await sqlQuery(
    "UPDATE memo_list_owner SET is_deleted=1 WHERE memo_list_owner_id=?",
    memoListOwnerId
  );
}
