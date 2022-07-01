import type { NextPage } from "next";
import Button from "../layouts/compornent/Button";
import BaseLayout from "../layouts/pages/base_layout";
import styles from "../styles/BaseLayout.module.css";

const Home: NextPage = () => {
  return BaseLayout(
    <div>
      <Button.comannd id="nanasi">test</Button.comannd>
      <Button.yes>test</Button.yes>
      <Button.no>test</Button.no>
      helow world
    </div>
  );
};

export default Home;
