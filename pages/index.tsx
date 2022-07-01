import type { NextPage } from "next";
import AjaxErrorHamburgerMenu from "../layouts/compornent/AjaxErrorHamburgerMenu";
import Button from "../layouts/compornent/Button";
import BaseLayout from "../layouts/pages/base_layout";

const Home: NextPage = () => {
  return BaseLayout(
    <div>
      <Button.comannd id="nanasi">test</Button.comannd>
      <Button.yes>test</Button.yes>
      <Button.no>test</Button.no>
      helow world
    </div>,
    <AjaxErrorHamburgerMenu></AjaxErrorHamburgerMenu>
  );
};

export default Home;
