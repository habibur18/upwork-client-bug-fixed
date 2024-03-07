import { FunctionComponent } from "react";
import ImageTagFrame from "./ImageTagFrame";
import styles from "./TurigmaaiFrame.module.css";

const TurigmaaiFrame: FunctionComponent = () => {
  return (
    <div className={styles.turigmaaiFrame}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <div className={styles.mailInfoturigmaaiFrame}>
        <div className={styles.pagesFrame}>
          <h1 className={styles.basic}>Basic</h1>
          <button className={styles.button}>
            <b className={styles.save30}>Save 30%</b>
          </button>
        </div>
        <ImageTagFrame />
        <div className={styles.unlimitedMembersUnlimitedContainer}>
          <p className={styles.unlimitedMembers}>Unlimited members</p>
          <p className={styles.p}></p>
          <p className={styles.unlimitedFeedback}>
            <b className={styles.unlimited}>Unlimited</b>
            <span> feedback</span>
          </p>
          <p className={styles.p1}></p>
        </div>
      </div>
      <button className={styles.button1}>
        <b className={styles.getStarted}>Get Started</b>
      </button>
    </div>
  );
};

export default TurigmaaiFrame;
