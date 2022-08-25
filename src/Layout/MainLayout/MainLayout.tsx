import React from "react";
import styles from "./MainLayout.module.css";

const MainLayout = (props) => {
  const { children } = props;
  return <div className={styles.main}>{children}</div>;
};

export default MainLayout;
