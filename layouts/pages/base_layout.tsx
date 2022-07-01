import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import styles from "../../styles/BaseLayout.module.css";
import AjaxErrorHamburgerMenu from "../compornent/AjaxErrorHamburgerMenu";

function BaseLayout(
  content: JSX.Element,
  defaultHamburgerMenuContent: JSX.Element | null = null
): JSX.Element {
  //hamburgerMenuButton
  var hamburgerMenuButton: JSX.Element;
  if (defaultHamburgerMenuContent === null) {
    hamburgerMenuButton = (
      <div className={styles.hamburger_menu_button_hide}></div>
    );
  } else {
    hamburgerMenuButton = (
      <div id="hamburger_menu_button" className={styles.hamburger_menu_button}>
        <div className={styles.rectangle_1}></div>
        <div className={styles.rectangle_2}></div>
        <div className={styles.rectangle_3}></div>
        <span className={styles.text}>MENU</span>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>シンプルメモ</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <div className={styles.body}>
        <Script src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
        <Script src="/javascript/compornent/base_layout.js"> </Script>
        <header className={styles.header}>
          <h1>シンプルメモ</h1>
          {hamburgerMenuButton}
        </header>

        <div className={styles.container_outer}>
          <div className={styles.container}>{content}</div>

          <div id="hamburger_menu" className={styles.hamburger_menu}>
            <input
              id="is_hamburger_menu_showed"
              defaultValue={0}
              className={styles.none}
            />
            <div className={styles.hamburger_menu_view}>
              <div
                id="hamburger_menu_close_button"
                className={styles.hamburger_menu_close_button}
              >
                <div className={styles.rectangle_1}></div>
                <div className={styles.rectangle_2}></div>
              </div>
              <div
                id="hamburger_menu_container"
                className={styles.hamburger_menu_container}
              ></div>
            </div>
          </div>

          <div
            id="progress_ring_container"
            className={styles.progress_ring_container}
          >
            <input
              id="is_progress_ring_showed"
              defaultValue={0}
              className={styles.none}
            />
            <div className={styles.progress_ring}>
              <div className={styles.progress_ring_font}>
                <div className={styles.progress_ring_font_inner_1}></div>
                <div className={styles.progress_ring_font_inner_2}></div>
              </div>
              <div className={styles.progress_ring_background}></div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.text}>&copy; Towelman. 2022.</span>
        </footer>

        <div id="default_hamburger_menu_content_outer" className={styles.none}>
          <div
            id="default_hamburger_menu_content"
            className={styles.default_hamburger_menu_content}
          >
            {defaultHamburgerMenuContent}
          </div>
        </div>

        <div id="ajax_error_hambueger_menu_outer" className={styles.none}>
          <AjaxErrorHamburgerMenu id="ajax_error_hambueger_menu"></AjaxErrorHamburgerMenu>
        </div>
        <Script src="/javascript/page/base_layout.js"> </Script>
      </div>
    </div>
  );
}

export default BaseLayout;
