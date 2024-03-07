import { FunctionComponent } from "react";
import styles from "./Copyrights1.module.css";

const Copyrights1: FunctionComponent = () => {
  return (
    <div className={styles.copyrights}>
      <div className={styles.copyrights1}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
        <div className={styles.copyrights2}>
          <div className={styles.copyrightTurigmaai}>
            Copyright © Turigma.ai
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.div}></div>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyrights1;
