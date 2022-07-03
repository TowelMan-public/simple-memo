import type { NextPage } from "next";
import Script from "next/script";
import style from "../../styles/MemoLayout.module.css";
import Button from "../compornent/Button";
import BaseLayout from "./base_layout";

function MemoLayout(): JSX.Element {
  return BaseLayout(
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
          <div className={style.memo_item_list}>
            <div className={style.memo_item + " " + style.memo_item_selected}>
              <div className={style.memo_item_title}>
                たとえ君が変わろうとも僕が変わろうとも
              </div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
            <div className={style.memo_item}>
              <div className={style.memo_item_title}>title</div>
              <div className={style.memo_item_delete_button}>
                <div className={style.rectangle_1} />
              </div>
            </div>
          </div>
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
    <div></div>
  );
}

export default MemoLayout;
