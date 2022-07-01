import type { NextPage } from "next";
import Script from "next/script";
import { ReactNode } from "react";
import styles from "../../styles/AjaxErrorHamburgerMenu.module.css";
import Button from "./Button";

type Props = {
  children: ReactNode;
};

const AjaxErrorHamburgerMenu: NextPage<Props> = ({
  children,
  ...props
}: Props) => {
  return (
    <div {...props} className={styles.body}>
      <div className={styles.title}>通信エラーが発生いたしました</div>
      <div className={styles.text}>
        只今行おうとしていた処理は失敗したと思われます。
      </div>
      <div className={styles.button_block}>
        <Button.yes id="ajax_error_hambueger_menu_close">閉じる</Button.yes>
      </div>
      <Script src="/javascript/page/ajax_error_hambueger_menu.js" />
    </div>
  );
};

export default AjaxErrorHamburgerMenu;
