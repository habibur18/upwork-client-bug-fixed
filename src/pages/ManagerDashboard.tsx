import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import Mainframe from "../components/Mainframe";
import LastCallAnalyticsTable from "../components/LastCallAnalyticsTable";
import FeedbackTextFrame from "../components/FeedbackTextFrame";
import UtilityPagesFrame from "../components/UtilityPagesFrame";
import CopyrightContainer from "../components/CopyrightContainer";
import styles from "./ManagerDashboard.module.css";

const ManagerDashboard: FunctionComponent = () => {
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
    <div className={styles.managerDashboard}>
      <FrameComponent2
        frameHeaderWidth="1        329px"
        frameHeaderPadding="0px var(--padding-xl) var(--padding-20xl)"
        frameHeaderWidth1="unset"
        frameHeaderPadding1="unset"
        frameHeaderFlex="1"
        onLogoFrameTextClick={onLogoFrameTextClick}
        onCampaignDesignTextClick={onCampaignDesignTextClick}
        onCampaignSetupTextClick={onCampaignSetupTextClick}
        onResearchTextClick={onResearchTextClick}
        onCallerDashboardTextClick={onCallerDashboardTextClick}
        onCallAnalysisTextClick={onCallAnalysisTextClick}
        onManagerDashboardTextClick={onManagerDashboardTextClick}
      />
      <div className={styles.campaignPerformanceParent}>
        <h1 className={styles.campaignPerformance}>Campaign Performance</h1>
        <div className={styles.pageSubtitle}>
          Integrated Management Dashboard
        </div>
      </div>
      <section className={styles.freequerybuttonframe}>
        <div className={styles.instructionsParent}>
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
      <section className={styles.mainframe}>
        <div className={styles.integratedCampaignScoreBy}>
          <h2 className={styles.averageCampaignScore}>
            Average campaign score across categories
          </h2>
          <div className={styles.lastCallAnalyticsTable}>
            <div className={styles.column}>
              <div className={styles.headerCell}>
                <b className={styles.category}>Category</b>
              </div>
              <div className={styles.itemCell}>
                <b className={styles.iceBreaker}>Ice Breaker</b>
              </div>
              <div className={styles.itemCell1}>
                <b className={styles.warmIntro}>Warm Intro</b>
              </div>
              <div className={styles.itemCell2}>
                <b className={styles.selfIntro}>Self Intro</b>
              </div>
              <div className={styles.itemCell3}>
                <b className={styles.purposeOfCall}>Purpose of Call</b>
              </div>
              <div className={styles.itemCell4}>
                <b className={styles.prospectChallenge}>Prospect Challenge</b>
              </div>
              <div className={styles.itemCell5}>
                <b className={styles.prospectCxoReference}>
                  Prospect CXO Reference
                </b>
              </div>
              <div className={styles.itemCell6}>
                <b className={styles.keyBenefits}>Key Benefits</b>
              </div>
              <div className={styles.itemCell7}>
                <b className={styles.caseStudies}>Case Studies</b>
              </div>
            </div>
            <div className={styles.column1}>
              <button className={styles.headerCell1}>
                <b className={styles.averageScore}>Average Score</b>
              </button>
              <button className={styles.itemCell8}>
                <div className={styles.freeQueryButton}>32.9</div>
              </button>
              <div className={styles.itemCell9}>
                <div className={styles.turigmaaiFrame}>
                  <p className={styles.p}>34.15</p>
                </div>
              </div>
              <div className={styles.itemCell10}>
                <div className={styles.homeFrame}>34.15</div>
              </div>
              <div className={styles.itemCell11}>
                <div className={styles.integrationsFrame}>28.83</div>
              </div>
              <div className={styles.itemCell12}>
                <div className={styles.featuresFrame}>39.04</div>
              </div>
              <div className={styles.itemCell13}>
                <div className={styles.appDownloadFrame}>32.91</div>
              </div>
              <div className={styles.itemCell14}>
                <div className={styles.copyrightFrame}>
                  <p className={styles.p1}>33.33</p>
                </div>
              </div>
              <button className={styles.itemCell15}>
                <div className={styles.campaignFrame}>35.39</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.mainframe1}>
        <div className={styles.line} />
      </div>
      <div className={styles.callerNumberFrame}>
        <div className={styles.selectCallerNumberParent}>
          <h1 className={styles.selectCallerNumber}>Select Caller Number</h1>
          <div className={styles.callerSelectorFrame}>
            <div className={styles.previousButtonParent}>
              <img
                className={styles.previousButtonIcon}
                loading="lazy"
                alt=""
                src="/previousbutton@2x.png"
              />
              <div className={styles.nextParent}>
                <div className={styles.next}>
                  <div className={styles.next1}>Next</div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.iocnIcon}
                    loading="lazy"
                    alt=""
                    src="/iocn.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.freeTextQueryFrame}>
              <div className={styles.searchInputBoundingBoxParent}>
                <div className={styles.searchInputBoundingBox} />
                <div className={styles.searchButton}>
                  <b className={styles.select}>Select</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callerNumberSelected1Wrapper}>
          <h2 className={styles.callerNumberSelected}>
            Caller number selected: 1
          </h2>
        </div>
      </div>
      <Mainframe
        caller1Performance="Caller 1 Performance:"
        callerScoreOverTimeMaxCat="Caller score over time (max category score = 3)"
        image27="/image-27@2x.png"
      />
      <Mainframe
        caller1Performance="Caller 1 Performance (details)"
        callerScoreOverTimeMaxCat="Caller 1 performance across categories and time"
        image27="/image-27-1@2x.png"
        propPadding="0px var(--padding-xl) var(--padding-20xl)"
        propHeight="578px"
      />
      <section className={styles.mainframe2}>
        <div className={styles.lastCallAnalyticsFrame}>
          <h2 className={styles.caller1Performance}>
            Caller 1 performance by category
          </h2>
          <LastCallAnalyticsTable />
        </div>
      </section>
      <section className={styles.frameParent}>
        <FeedbackTextFrame />
        <button className={styles.freeQueryButton1}>
          <div className={styles.runFreeText}>Run Free Text Query</div>
        </button>
      </section>
      <div className={styles.mainframe3}>
        <div className={styles.line1} />
      </div>
      <UtilityPagesFrame />
      <CopyrightContainer />
    </div>
  );
};

export default ManagerDashboard;
