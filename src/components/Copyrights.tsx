import { FunctionComponent } from "react";
import styles from "./Copyrights.module.css";

const Copyrights: FunctionComponent = () => {
  return (
    <footer className={styles.copyrights}>
      <img className={styles.lineIcon} loading="lazy" alt="" src="/line.svg" />
      <div className={styles.copyrights1}>
        <div className={styles.copyrightTurigmaai}>Copyright © Turigma.ai</div>
        <div className={styles.socialMedia}>
          <div className={styles.div}></div>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
          <div className={styles.div3}></div>
        </div>
      </div>
    </footer>
  );
};

export default Copyrights;
