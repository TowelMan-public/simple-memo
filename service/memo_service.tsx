import MemoEntity from "../entity/memo";
import {
  createMemoId,
  getMemoList,
  insertMemo,
  validationMemoListId,
} from "../repository/memo";

function createMemoListPeriod(nowDate: Date): Date {
  let date = new Date(nowDate.getTime());
  date.setDate(date.getDate() + 7);
  return date;
}

async function saveMemoList(
  memoList: MemoEntity[],
  period: Date
): Promise<number> {
  let memoListOwnerId = await createMemoId(period);
  memoList.forEach(async (memo) => {
    await insertMemo(memoListOwnerId, memo);
  });

  return memoListOwnerId;
}

async function loadMemoList(
  memoListOwnerId: number
): Promise<MemoEntity[] | null> {
  if (await validationMemoListId(memoListOwnerId, new Date())) {
    return await getMemoList(memoListOwnerId);
  } else {
    return null;
  }
}
