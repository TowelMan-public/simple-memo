import MemoEntity from "../entity/memo";
import {
  createMemoId,
  deleteMemoList,
  getMemoList,
  insertMemo,
  validationMemoListId,
} from "../repository/memo";

export function createMemoListPeriod(nowDate: Date): Date {
  let date = new Date(nowDate.getTime());
  date.setDate(date.getDate() + 7);
  return date;
}

export async function saveMemoList(
  memoList: MemoEntity[],
  period: Date
): Promise<number> {
  let memoListOwnerId = await createMemoId(period);

  memoList.forEach(async (memo) => {
    await insertMemo(memoListOwnerId, memo);
  });

  return memoListOwnerId;
}

export async function loadMemoList(
  memoListOwnerId: number
): Promise<MemoEntity[] | null> {
  if (await validationMemoListId(memoListOwnerId, new Date())) {
    let memoList = await getMemoList(memoListOwnerId);
    await deleteMemoList(memoListOwnerId); //not await
    return memoList;
  } else {
    return null;
  }
}
