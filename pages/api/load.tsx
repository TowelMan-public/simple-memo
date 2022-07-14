import type { NextApiRequest, NextApiResponse } from "next";
import { loadMemoList } from "../../service/memo_service";

export default async (
  request: NextApiRequest,
  response: NextApiResponse<any>
) => {
  if (request.method != "get") {
    response.status(400).send({});
  }

  let memoListId = Number.parseInt(request.query.id as string);

  try {
    let memoList = await loadMemoList(memoListId);
    if (memoList == null) {
      response.status(404).send({});
    } else {
      let json = JSON.stringify(memoList);
      response.status(200).json(json);
    }
  } catch {
    response.status(500).send({});
  }
};
