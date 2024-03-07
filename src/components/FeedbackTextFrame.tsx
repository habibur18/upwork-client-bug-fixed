import { FunctionComponent } from "react";
import styles from "./FeedbackTextFrame.module.css";

const FeedbackTextFrame: FunctionComponent = () => {
  return (
    <div className={styles.feedbackTextFrame}>
      <div className={styles.freeTextQuestionFrame}>
        <h1 className={styles.askAnyQuestion}>Ask Any Question</h1>
        <h2 className={styles.enterFreeText}>
          Enter free text question re call analytics:
        </h2>
      </div>
      <textarea className={styles.pagesFrame} rows={13} cols={51} />
    </div>
  );
};

export default FeedbackTextFrame;
