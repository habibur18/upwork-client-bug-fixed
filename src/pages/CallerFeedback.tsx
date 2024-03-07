import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SelectedProspectDetails from "../components/SelectedProspectDetails";
import LastCallAnalyticsTable1 from "../components/LastCallAnalyticsTable1";
import FeedbackTextFrame from "../components/FeedbackTextFrame";
import HeaderCellFrame from "../components/HeaderCellFrame";
import CopyrightContainer from "../components/CopyrightContainer";
import styles from "./CallerFeedback.module.css";

const CallerFeedback: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoFrameTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCampaignDesignTextClick = useCallback(() => {
    navigate("/campaigndesign");
  }, [navigate]);

  const onCampaignSetupTextClick = useCallback(() => {
    navigate("/campaignsetup");
  }, [navigate]);

  const onResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCallAnalysisTextClick = useCallback(() => {
    navigate("/caller-feedback");
  }, [navigate]);

  const onManagerDashboardTextClick = useCallback(() => {
    navigate("/manager-dashboard");
  }, [navigate]);

  return (
    <div className={styles.callerFeedback}>
      <header className={styles.logoAndMenu}>
        <h3 className={styles.logoFrame} onClick={onLogoFrameTextClick}>
          Turigma.ai
        </h3>
        <div className={styles.menuFrame}>
          <div
            className={styles.campaignDesign}
            onClick={onCampaignDesignTextClick}
          >
            Campaign Design
          </div>
          <div
            className={styles.campaignSetup}
            onClick={onCampaignSetupTextClick}
          >
            Campaign Setup
          </div>
          <div className={styles.research} onClick={onResearchTextClick}>
            Research
          </div>
          <div
            className={styles.callerDashboard}
            onClick={onCallerDashboardTextClick}
          >
            Caller Dashboard
          </div>
          <div
            className={styles.callAnalysis}
            onClick={onCallAnalysisTextClick}
          >
            Call Analysis
          </div>
          <div
            className={styles.managerDashboard}
            onClick={onManagerDashboardTextClick}
          >
            Manager Dashboard
          </div>
        </div>
      </header>
      <section className={styles.framecallAnalysis}>
        <div className={styles.feedbackFrame}>
          <h1 className={styles.callerFeedback1}>Caller Feedback</h1>
          <div className={styles.pageSubtitle}>Setup and launch in minutes</div>
        </div>
        <div className={styles.dashboardFrame}>
          <h1 className={styles.instructions}>Instructions</h1>
          <div className={styles.thisDashboardProvidesContainer}>
            <p
              className={styles.thisDashboardProvides}
            >{`This dashboard provides detailed analysis of Caller's performance. `}</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.itShowsPerformance}>
              It shows performance on each suggested step of the Calling Script
            </p>
          </div>
        </div>
      </section>
      <section className={styles.searchInputFrame}>
        <SelectedProspectDetails />
        <div className={styles.callerPerformanceFrame}>
          <h1 className={styles.callerPerformance}>Caller Performance</h1>
          <div className={styles.summarytable}>
            <div className={styles.column}>
              <div className={styles.headerCell}>
                <h2 className={styles.category}>Category</h2>
              </div>
              <div className={styles.itemCell}>
                <b className={styles.lastCallScore}>Last Call Score</b>
              </div>
              <div className={styles.itemCell1}>
                <b className={styles.todaysCallScore}>
                  Today’s Call Score (avg)
                </b>
              </div>
              <div className={styles.itemCell2}>
                <b className={styles.averageCampaignScore}>
                  Average Campaign Score
                </b>
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.headerCell1}>
                <h2 className={styles.scoreOutOf}>Score (out of 16)</h2>
              </div>
              <div className={styles.itemCell3}>
                <div className={styles.div}>15</div>
              </div>
              <button className={styles.itemCell4}>
                <div className={styles.div1}>{`11 `}</div>
              </button>
              <div className={styles.itemCell5}>
                <div className={styles.div2}>14</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lastCallAnalyticsFrame}>
          <h1 className={styles.lastCallAnalytics}>
            Last Call Analytics (detail)
          </h1>
          <LastCallAnalyticsTable1 />
        </div>
        <div className={styles.lineSeparator}>
          <FeedbackTextFrame />
          <button className={styles.freeQueryButton}>
            <div className={styles.runFreeText}>Run Free Text Query</div>
          </button>
        </div>
      </section>
      <HeaderCellFrame />
      <CopyrightContainer />
    </div>
  );
};

export default CallerFeedback;
