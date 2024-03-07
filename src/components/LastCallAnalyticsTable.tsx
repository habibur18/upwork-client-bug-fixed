import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./LastCallAnalyticsTable.module.css";

const LastCallAnalyticsTable: FunctionComponent = () => {
  return (
    <form className={styles.lastCallAnalyticsTable}>
      <div className={styles.column}>
        <button className={styles.headerCell}>
          <b className={styles.category}>Category</b>
        </button>
        <div className={styles.itemCell}>
          <b className={styles.iceBreaker}>Ice Breaker</b>
        </div>
        <div className={styles.itemCell1}>
          <b className={styles.warmIntro}>Warm Intro</b>
        </div>
        <div className={styles.itemCell2}>
          <b className={styles.selfIntro}>Self Intro</b>
        </div>
        <button className={styles.itemCell3}>
          <b className={styles.purposeOfCall}>Purpose of Call</b>
        </button>
        <div className={styles.itemCell4}>
          <b className={styles.prospectChallenge}>Prospect Challenge</b>
        </div>
        <div className={styles.itemCell5}>
          <b className={styles.prospectCxoReference}>Prospect CXO Reference</b>
        </div>
        <div className={styles.itemCell6}>
          <b className={styles.keyBenefits}>Key Benefits</b>
        </div>
        <div className={styles.itemCell7}>
          <b className={styles.caseStudies}>Case Studies</b>
        </div>
      </div>
      <Column day1="Day 1" />
      <Column day1="Day 2" />
      <Column day1="Day 3" />
      <Column day1="Day 4" />
      <Column day1="Day 5" />
      <Column day1="Day 6" />
      <Column day1="Day 7" />
      <Column day1="Day 8" />
    </form>
  );
};

export default LastCallAnalyticsTable;
