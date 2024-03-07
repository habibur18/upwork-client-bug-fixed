import { FunctionComponent, useCallback } from "react";
import ImageTagFrame from "./ImageTagFrame";
import { useNavigate } from "react-router-dom";
import styles from "./TextFrames.module.css";

const TextFrames: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.textFrames}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <div className={styles.frameWithTwoChildren}>
        <div className={styles.turigmaaiLogoFrame}>
          <h2 className={styles.advanced}>Advanced</h2>
          <button className={styles.button}>
            <b className={styles.popular}>Popular</b>
          </button>
        </div>
        <ImageTagFrame
          propAlignSelf="unset"
          propPadding="unset"
          propWidth="378px"
        />
      </div>
      <div className={styles.unlimitedMembersUnlimitedContainer}>
        <p className={styles.unlimitedMembers}>Unlimited members</p>
        <p className={styles.p}></p>
        <p className={styles.unlimitedFeedback}>
          <b className={styles.unlimited}>Unlimited</b>
          <span> feedback</span>
        </p>
        <p className={styles.p1}></p>
        <p className={styles.callerFeedback}>Caller feedback</p>
        <p className={styles.p2}></p>
        <p className={styles.managerDashboard}>Manager Dashboard</p>
        <p className={styles.p3}></p>
        <p className={styles.realTimeProspectAlerts}>
          Real-time Prospect Alerts
        </p>
        <p className={styles.p4}></p>
      </div>
      <button className={styles.button1} onClick={onButton1Click}>
        <b className={styles.getStarted}>Get Started</b>
      </button>
    </div>
  );
};

export default TextFrames;
