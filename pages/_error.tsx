import React from "react";
import { NextPage, NextPageContext } from "next";
import style from "../styles/Error.module.css";
import Link from "next/link";
import BaseLayout from "../layouts/pages/base_layout";

type Props = {
  statusCode: number;
};

const Error: NextPage = ({ ...props }) => {
  let statusCode = props.statusCode;
  let title =
    statusCode != null
      ? statusCode + "エラー"
      : props.title != null
      ? props.title
      : "予期しないエラー";
  let message =
    statusCode != null
      ? statusCode == 404
        ? "そのURLは存在しません"
        : "何らかの通信エラー等が発生しました。"
      : props.message != null
      ? props.message
      : "予期しないエラーが発生いたしました。";

  return BaseLayout(
    <div className={style.body}>
      <div className={style.title}>{title}</div>
      <div className={style.message}>{message}</div>
      <Link href="/" className={style.link}>
        <a className={style.a}>メモページに行く</a>
      </Link>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
