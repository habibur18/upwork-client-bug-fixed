import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogoAndMenu.module.css";

const LogoAndMenu: FunctionComponent = () => {
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

  const onCallAnalysisTextClick = useCallback(() => {
    navigate("/caller-feedback");
  }, [navigate]);

  const onManagerDashboardTextClick = useCallback(() => {
    navigate("/manager-dashboard");
  }, [navigate]);

  return (
    <div className={styles.logoAndMenu}>
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
        <div className={styles.callerDashboard}>Caller Dashboard</div>
        <div className={styles.callAnalysis} onClick={onCallAnalysisTextClick}>
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
  );
};

export default LogoAndMenu;
