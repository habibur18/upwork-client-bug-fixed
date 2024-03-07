import { FunctionComponent } from "react";
import styles from "./Pages.module.css";

export type PagesType = {
  /** Action props */
  onPagesContainer1Click?: () => void;
};

const Pages: FunctionComponent<PagesType> = ({ onPagesContainer1Click }) => {
  return (
    <div className={styles.pages} onClick={onPagesContainer1Click}>
      <h2 className={styles.pages1}>Pages</h2>
      <div className={styles.homeDescription} />
      <h3 className={styles.homeAboutUsContainer}>
        <p className={styles.home}>Home</p>
        <p className={styles.aboutUs}>About Us</p>
        <p className={styles.integrations}>
          <b className={styles.integrations1}>Integrations</b>
          <span></span>
        </p>
        <p className={styles.pricing}>Pricing</p>
        <p className={styles.features}>Features</p>
        <p className={styles.contactUs}>Contact Us</p>
      </h3>
    </div>
  );
};

export default Pages;
