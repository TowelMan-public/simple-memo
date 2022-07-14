import MemoEntity from "../../entity/memo";
import {
  createMemoListPeriod,
  loadMemoList,
  saveMemoList,
} from "../../service/memo_service";
import iconv from "iconv-lite";
import { setTestModeToEnv } from "../../env";

iconv.encodingExists("utf8");
setTestModeToEnv();

describe("testSaveMemolist", () => {
  jest.setTimeout(9999999999);
  test("1", async () => {
    let nowDate = new Date();
    let period = createMemoListPeriod(nowDate);
    console.log(nowDate);
    console.log(period);

    let memoList: MemoEntity[] = [];
    memoList.push(
      new MemoEntity({ title: "test1", content: "test_content_1" }),
      new MemoEntity({ title: "test2", content: "test_content_2" }),
      new MemoEntity({ title: "test3", content: "test_content_3" }),
      new MemoEntity({ title: "test4", content: "test_content_4" })
    );

    let id = await saveMemoList(memoList, period);
    expect(id).toBeDefined();
    console.log("end");
  });

  test("2", async () => {
    let nowDate = new Date();
    nowDate.setDate(nowDate.getDate() - 6);
    nowDate.setHours(nowDate.getHours() - 23);
    let period = createMemoListPeriod(nowDate);
    console.log(nowDate);
    console.log(period);

    let memoList: MemoEntity[] = [];
    memoList.push(
      new MemoEntity({ title: "test1", content: "test_content_1" }),
      new MemoEntity({ title: "test2", content: "test_content_2" }),
      new MemoEntity({ title: "test3", content: "test_content_3" }),
      new MemoEntity({ title: "test4", content: "test_content_4" })
    );

    let id = await saveMemoList(memoList, period);
    expect(id).toBeDefined();
    expect(await loadMemoList(id)).toEqual(expect.arrayContaining(memoList));
  });

  test("3", async () => {
    let nowDate = new Date();
    nowDate.setDate(nowDate.getDate() - 8);
    let period = createMemoListPeriod(nowDate);

    console.log(nowDate);
    console.log(period);

    let memoList: MemoEntity[] = [];
    memoList.push(
      new MemoEntity({ title: "test1", content: "test_content_1" }),
      new MemoEntity({ title: "test2", content: "test_content_2" }),
      new MemoEntity({ title: "test3", content: "test_content_3" }),
      new MemoEntity({ title: "test4", content: "test_content_4" })
    );

    let id = await saveMemoList(memoList, period);
    expect(id).toBeDefined();
    expect(await loadMemoList(id)).toBeNull();
  });
});
