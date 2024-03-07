import { FunctionComponent } from "react";
import styles from "./Line.module.css";

const Line: FunctionComponent = () => {
  return (
    <section className={styles.line}>
      <div className={styles.turigmaaiInfoFrame}>
        <div className={styles.aICopilotTextWrapper}>
          <div className={styles.aICopilotText}>
            <h1 className={styles.aiCoPilot}>AI Co-pilot</h1>
            <div className={styles.aICopilotTextChild} />
          </div>
        </div>
        <div className={styles.getAnswerButton}>
          <button className={styles.button}>
            <b className={styles.getAnswer}>Get Answer</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Line;
