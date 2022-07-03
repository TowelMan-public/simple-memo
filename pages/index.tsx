import type { NextPage } from "next";
import AjaxErrorHamburgerMenu from "../layouts/compornent/AjaxErrorHamburgerMenu";
import Button from "../layouts/compornent/Button";
import MemoLayout from "../layouts/pages/memo_layout";
import Error from "./_error";

const Home: NextPage = () => {
  return MemoLayout();
};

export default Home;
