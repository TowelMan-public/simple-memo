import type { NextApiRequest, NextApiResponse } from "next";
import MemoEntity from "../../entity/memo";
import { createMemoListPeriod, saveMemoList } from "../../service/memo_service";

export default async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  if (request.method != "POST") {
    response.status(400).send({});
    return;
  }

  let period = createMemoListPeriod(new Date());
  let jsonBody = JSON.parse(request.body.body);
  let memoList: MemoEntity[] = [];
  jsonBody.forEach((jsonObject: any) => {
    memoList.push(new MemoEntity(jsonObject));
  });

  try {
    let id = await saveMemoList(memoList, period);
    response
      .status(200)
      .json({ period_time: period.getTime().toString(), id: id.toString() });
  } catch {
    response.status(500).send({});
  }
};
