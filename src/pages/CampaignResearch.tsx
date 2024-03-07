import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CopyrightInfo from "../components/CopyrightInfo";
import Pages from "../components/Pages";
import UploadSellSideDocs1 from "../components/UploadSellSideDocs1";
import UtilitiPage from "../components/UtilitiPage";
import styles from "./CampaignResearch.module.css";

const CampaignResearch: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPagesContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  const onStartAnalysisFrameClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  return (
    <div className={styles.campaignresearch}>
      <header className={styles.logoMenuInstance}>
        <div className={styles.logoAndMenu}>
          <h2 className={styles.logoFrame} onClick={onLogoFrameTextClick}>
            Turigma.ai
          </h2>
          <div className={styles.menuFrame}>
            <div className={styles.campaignDesign} onClick={onCampaignDesignTextClick}>
              Campaign Design
            </div>
            <div className={styles.campaignSetup} onClick={onCampaignSetupTextClick}>
              Campaign Setup
            </div>
            <div className={styles.research} onClick={onResearchTextClick}>
              Research
            </div>
            <div className={styles.callerDashboard} onClick={onCallerDashboardTextClick}>
              Caller Dashboard
            </div>
            <div className={styles.callAnalysis} onClick={onCallAnalysisTextClick}>
              Call Analysis
            </div>
            <div className={styles.managerDashboard} onClick={onManagerDashboardTextClick}>
              Manager Dashboard
            </div>
          </div>
        </div>
      </header>
      <section className={styles.line}>
        <div className={styles.campaignResearchFRAME}>
          <h1 className={styles.campaignResearch}>Campaign Research</h1>
          <h3 className={styles.pageSubtitle}>Setup and launch in minutes</h3>
        </div>
      </section>
      <section className={styles.uploadsellsidedocs}>
        <div className={styles.uploadFrameFRAME}>
          <h1 className={styles.turigmaAiAutomated}>Turigma AI Automated Research</h1>
          <div className={styles.worlds1stFully}>World’s 1st fully automated PreSales campaign research. Reduce months to minutes.</div>
        </div>
      </section>
      <div className={styles.uploadSellsideDocsTEXT}>
        <h1 className={styles.uploadSellSideDocuments}>Upload Sell-side documents</h1>
      </div>
      <section className={styles.uploadbuysidedocsINSTAN}>
        <UploadSellSideDocs1 />
      </section>
      <section className={styles.campaignresearchInner}>
        <div className={styles.turigmaAIAutomatedResearchParent}>
          <div className={styles.turigmaAIAutomatedResearch}>
            <h1 className={styles.uploadCampaignSetup}>Upload Campaign Setup File (Excel)</h1>
          </div>
          <UploadSellSideDocs1 propWidth="unset" propAlignSelf="stretch" />
        </div>
      </section>
      <section className={styles.startAnalysisFrameWrapper}>
        <div className={styles.startAnalysisFrame} onClick={onStartAnalysisFrameClick}>
          <h1 className={styles.startAnalysis}>Start Analysis</h1>
        </div>
      </section>
      <div className={styles.lineWrapper}>
        <div className={styles.line1} />
      </div>
      <footer className={styles.turigmaAIFrameWrapper}>
        <div className={styles.turigmaAIFrame}>
          <div className={styles.turigmaAIAutomationLogoParent}>
            <div className={styles.turigmaAIAutomationLogo}>
              <h2 className={styles.turigmaai}>Turigma.ai</h2>
              <h3 className={styles.aLeadingSilicon}>A leading Silicon Valley pioneer in AI automation of enterprise PreSales</h3>
            </div>
            <div className={styles.mailInfo}>
              <div className={styles.framemailphonecall}>
                <div className={styles.mailphonecall}>
                  <img className={styles.mailIcon} loading="lazy" alt="" src="/mail.svg" />
                </div>
                <h3 className={styles.infoturigmaai}>info@turigma.ai</h3>
              </div>
              <div className={styles.framemailphonecall1}>
                <div className={styles.phoneCallWrapper}>
                  <img className={styles.phoneCallIcon} loading="lazy" alt="" src="/phonecall.svg" />
                </div>
                <div className={styles.div}>408-418-8163</div>
              </div>
            </div>
          </div>
          <Pages onPagesContainer1Click={onPagesContainerClick} />
          <UtilitiPage utilitiPageWidth="211px" utilitiPageFlex="unset" utilitiPageMinWidth="unset" onUtilitiPageContainerClick={onUtilitiPageContainerClick} />
          <div className={styles.appDownload}>
            <div className={styles.content} />
          </div>
        </div>
      </footer>
      <CopyrightInfo propPadding="0px var(--padding-mini)" propMaxHeight="unset" propHeight="1px" />
    </div>
  );
};

export default CampaignResearch;
