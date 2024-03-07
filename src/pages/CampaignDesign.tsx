import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionInstructions from "../components/SectionInstructions";
import WelcomeToPreSalesAIFrame from "../components/WelcomeToPreSalesAIFrame";
import FrameBackground from "../components/FrameBackground";
import CopyrightFrame from "../components/CopyrightFrame";
import styles from "./CampaignDesign.module.css";

const CampaignDesign: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoFrameTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCampaignDesignText1Click = useCallback(() => {
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
    <div className={styles.campaigndesign}>
      <header className={styles.campaignDesign}>
        <div className={styles.logoAndMenu}>
          <h2 className={styles.logoFrame} onClick={onLogoFrameTextClick}>
            Turigma.ai
          </h2>
          <div className={styles.menuFrame}>
            <div
              className={styles.campaignDesign1}
              onClick={onCampaignDesignText1Click}
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
        </div>
      </header>
      <section className={styles.frameText}>
        <div className={styles.campaignDesignText}>
          <h1 className={styles.campaignDesign2}>Campaign Design</h1>
          <h3 className={styles.pageSubtitle}>Setup and launch in minutes</h3>
        </div>
      </section>
      <SectionInstructions
        propAlignSelf="unset"
        propPadding="0px 0px var(--padding-3xs) 0px"
        propWidth="1338px"
        propGap="40px 0px"
        propPadding1="0px var(--padding-xl) 0px 0px"
      />
      <section className={styles.instructionsText}>
        <div className={styles.instructionsFrame}>
          <div className={styles.welcometextText}>
            <div className={styles.frameWelcometextframe}>
              <h1 className={styles.welcomeToPresalesContainer}>
                <span className={styles.welcomeToPresalesContainer1}>
                  <p className={styles.welcomeToPresalesAiAutomat}>
                    <b>Welcome to PreSales AI Automation</b>
                  </p>
                  <p className={styles.turigmaTheWorlds1stEnter}>
                    <i>Turigma: the world's 1st Enterprise-grade AI platform</i>
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <ul className={styles.turigmaaiGeneratesAutomated}>
                    <li className={styles.turigmaaiGeneratesAutomated1}>
                      <span>
                        Turigma.ai generates automated Calling Script customized
                        for each Prospect.Turigma.ai also provides real-time
                        analysis of all calls to provide instant improvement
                        feedback.Turigma.ai helps track overall camapign
                        analytics, giving managers a real-time pulse on progress
                        and improvement strategies
                      </span>
                    </li>
                    <li>
                      <span>
                        Turigma reduces campaign time from months to days. It
                        improves outcomes by 300% or more.Turigma platform is
                        built on 140+ man years and 10+ Million records of
                        proprietary data
                      </span>
                    </li>
                  </ul>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <WelcomeToPreSalesAIFrame />
      <FrameBackground />
      <CopyrightFrame />
    </div>
  );
};

export default CampaignDesign;
