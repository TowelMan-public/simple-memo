import type { NextPage } from "next";
import Script from "next/script";
import AjaxErrorHamburgerMenu from "../layouts/compornent/AjaxErrorHamburgerMenu";
import Button from "../layouts/compornent/Button";
import MemoLayout from "../layouts/pages/memo_layout";
import Error from "./_error";

const Home: NextPage = () => {
  return MemoLayout(<Script src="/javascript/page/home_page.js" />);
};

export default Home;
