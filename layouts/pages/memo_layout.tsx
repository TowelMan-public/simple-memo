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
          <div id="memo_item_list_outer" className={style.memo_item_list_outer}>
            {MemoItemList()}
          </div>
        </div>
        <div className={style.memo}>
          <div className={style.memo_title_bar}>
            <textarea
              id="memo_title_bar_title"
              className={style.memo_title_bar_title}
              maxlength="50"
            >
              title なんか長いタイトルにしたいんですけどどうですか？
            </textarea>
            <div
              id="memo_title_bar_delete_button"
              className={style.memo_item_delete_button}
            >
              <div className={style.rectangle_1} />
            </div>
          </div>
          <textarea
            id="memo_content"
            className={style.memo_content}
            maxlength="1000"
          />
        </div>
      </div>
      <div id="memo_layout_humburger_menu_containner" className="none">
        <div
          id="memo_save_humburger_menu"
          className={style.memo_save_humburger_menu}
        >
          <div className={style.title}>
            このメモの内容を一時的に保存しますか？
          </div>
          <div className={style.text_outer}>
            <div className={style.text}>
              ・メモの保存期間は一週です。
              <br />
              ・一度保存されたメモを開くと、その保存は破棄されます。
            </div>
          </div>
          <div className={style.button_block}>
            <Button.yes id="memo_save_humburger_menu_yes_button">
              はい
            </Button.yes>
            <Button.no id="memo_save_humburger_menu_no_button">
              いいえ
            </Button.no>
          </div>
        </div>
      </div>

      <Script src="/javascript/compornent/memo_layout.js"> </Script>
      <Script src="/javascript/page/memo_layout.js"> </Script>
      <Script src="/javascript/page/memo_hamburger_menu.js"> </Script>
      <Script src="/javascript/page/memo_save_humburger_menu.js"></Script>
    </div>,

    //hamburger menu
    <div
      id="memo_hamburger_menu_body"
      className={style.memo_hamburger_menu_body}
    >
      <div
        id="memo_hamburger_menu_comannd_bar"
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
          <div
            id="humburger_menu_memo_item_add_button"
            className={style.memo_item_add_button}
          >
            <div className={style.rectangle_1} />
            <div className={style.rectangle_2} />
          </div>
        </div>
        <div
          id="humburger_menu_memo_item_list_outer"
          className={style.memo_item_list_outer}
        ></div>
      </div>
    </div>
  );
}

export default MemoLayout;
