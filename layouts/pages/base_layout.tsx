import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import styles from "../../styles/BaseLayout.module.css";

function BaseLayout(
  content: JSX.Element,
  defaultHamburgerMenuContents: JSX.Element | null = null
): JSX.Element {
  return (
    <div>
      <Head>
        <title>シンプルメモ</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <Script src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
      </Head>

      <div className={styles.body}>
        <header className={styles.header}>
          <h1>シンプルメモ</h1>
          <div className={styles.hamburger_menu_button}>
            <div className={styles.rectangle_1}></div>
            <div className={styles.rectangle_2}></div>
            <div className={styles.rectangle_3}></div>
            <span className={styles.text}>MENU</span>
          </div>
        </header>

        <div className={styles.container_outer}>
          <div className={styles.container}>{content}</div>

          <div className={styles.hamburger_menu}>
            <div className={styles.hamburger_menu_view}>
              <div className={styles.hamburger_menu_close_button}>
                <div className={styles.rectangle_1}></div>
                <div className={styles.rectangle_2}></div>
              </div>
              <div className={styles.hamburger_menu_container}>
                <div className={styles.hamburger_menu_contents}></div>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          <span className={styles.text}>&copy; Towelman. 2022.</span>
        </footer>
      </div>
    </div>
  );
}

export default BaseLayout;
