import type { NextPage } from "next";
import BaseLayout from "../layouts/pages/base_layout";
import styles from "../styles/BaseLayout.module.css";

const Home: NextPage = () => {
  return BaseLayout(<div>helow world</div>);
};

export default Home;
