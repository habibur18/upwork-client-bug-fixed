import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.blogWrapper}>
      <div className={styles.blog}>
        <div className={styles.image}>
          <h1 className={styles.trainedAndHighlyContainer}>
            <p
              className={styles.trainedAndHighly}
            >{`Trained and highly optimized `}</p>
            <p className={styles.presalesCopilot}>PreSales CoPilot..</p>
          </h1>
          <button className={styles.btn}>
            <div className={styles.btnChild} />
            <b className={styles.howItWork}>How It Work</b>
          </button>
        </div>
        <div className={styles.mailInfoturigmaai}>
          <div className={styles.november}>
            <b className={styles.createAccount}>{`01. Upload Campaign `}</b>
          </div>
          <div className={styles.november1}>
            <h2 className={styles.aiAutomatesPresales}>
              02. AI Automates PreSales
            </h2>
          </div>
          <div className={styles.november2}>
            <b className={styles.trackAnalytics}>03. Instant Results</b>
          </div>
        </div>
        <div className={styles.automateReportsGenerationWi}>
          <div className={styles.itIsALongEstablishedFact}>
            <div className={styles.content}>
              <img className={styles.icon} alt="" src="/icon-3.svg" />
              <h1 className={styles.createYourAccountContainer}>
                <p className={styles.createYourAccount}>Create your account</p>
                <p className={styles.startYourWork}>{`& start your work`}</p>
              </h1>
            </div>
            <div
              className={styles.theSystemAnd}
            >{`The system and workflow is designed by a team of AI and PreSales experts. It blends in your existing workflow. Just create a login and upload your campaign doc to begin. See results in minutes. `}</div>
            <button className={styles.button}>
              <b className={styles.getStarted}>Get Started</b>
            </button>
          </div>
          <img
            className={styles.getStartedImageIcon}
            loading="lazy"
            alt=""
            src="/getstartedimage@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
