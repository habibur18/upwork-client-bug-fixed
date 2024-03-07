import { FunctionComponent } from "react";
import styles from "./CopyrightFrame.module.css";

const CopyrightFrame: FunctionComponent = () => {
  return (
    <div className={styles.copyrightFrame}>
      <div className={styles.copyrights}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
        <div className={styles.copyrights1}>
          <h3 className={styles.copyrightTurigmaai}>Copyright © Turigma.ai</h3>
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

export default CopyrightFrame;
