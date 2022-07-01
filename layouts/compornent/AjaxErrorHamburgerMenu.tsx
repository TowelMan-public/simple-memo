import type { NextPage } from "next";
import Script from "next/script";
import styles from "../../styles/AjaxErrorHamburgerMenu.module.css";
import Button from "./Button";

const AjaxErrorHamburgerMenu: NextPage = () => {
  return (
    <div id="ajax_error_hambueger_menu" className={styles.body}>
      <Script src="/javascript/compornent/ajax_error_hambueger_menu.js" />
      <div className={styles.title}>通信エラーが発生いたしました</div>
      <div className={styles.text}>
        只今行おうとしていた処理は失敗したと思われます。
      </div>
      <div className={styles.button_block}>
        <Button.yes id="ajax_error_hambueger_menu_close">閉じる</Button.yes>
      </div>
    </div>
  );
};

export default AjaxErrorHamburgerMenu;
