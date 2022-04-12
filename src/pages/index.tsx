import { HeaderActionComponent } from "components/layout";
import type { NextPage } from "next";
import { useEffect } from "react";
import { imagesService } from "services";
import styles from "../styles/Home.module.css";
import FeatureList from "./feature-list";

const Home: NextPage = () => {
  return <div className={styles.container}>
    <HeaderActionComponent /> 
    <FeatureList/>
    </div>;
};

export default Home;
