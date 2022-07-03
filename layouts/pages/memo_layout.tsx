import type { NextPage } from "next";
import Script from "next/script";
import style from "../../styles/MemoLayout.module.css";
import Button from "../compornent/Button";
import MemoItemList from "../compornent/MemoItemList";
import BaseLayout from "./base_layout";

function MemoLayout(): JSX.Element {
  return BaseLayout(
    //body
    <div className={style.body}>
      <div className={style.comannd_bar}>
        <Button.comannd id="memo_save_comannd_button">保存</Button.comannd>
        <Button.comannd id="memo_reset_comannd_button">リセット</Button.comannd>
      </div>
      <div className={style.memo_contents}>
        <div className={style.memo_list}>
          <div className={style.memo_list_comannd_bar}>
            <div className={style.memo_list_comannd_bar_title}>一覧</div>
            <div
              id="memo_item_add_button"
              className={style.memo_item_add_button}
            >
              <div className={style.rectangle_1} />
              <div className={style.rectangle_2} />
            </div>
          </div>
          {MemoItemList()}
        </div>
        <div className={style.memo}>
          <div className={style.memo_title_bar}>
            <textarea className={style.memo_title_bar_title}>
              title なんか長いタイトルにしたいんですけどどうですか？
            </textarea>
            <div
              id="memo_delete_button"
              className={style.memo_item_delete_button}
            >
              <div className={style.rectangle_1} />
            </div>
          </div>
          <textarea className={style.memo_content} />
        </div>
      </div>
    </div>,

    //hamburger menu
    <div id="memo_hamburger_menu_body">
      <div
        className={
          style.comannd_bar + " " + style.comannd_bar_in_hamburger_menu
        }
      >
        <Button.comannd id="hamburger_menu_memo_save_comannd_button">
          保存
        </Button.comannd>
        <Button.comannd id="hamburger_menumemo_reset_comannd_button">
          リセット
        </Button.comannd>
      </div>

      <div
        className={style.memo_list + " " + style.memo_list_in_hamburger_menu}
      >
        <div className={style.memo_list_comannd_bar}>
          <div className={style.memo_list_comannd_bar_title}>一覧</div>
          <div id="memo_item_add_button" className={style.memo_item_add_button}>
            <div className={style.rectangle_1} />
            <div className={style.rectangle_2} />
          </div>
        </div>
        {MemoItemList()}
      </div>
    </div>
  );
}

export default MemoLayout;
