import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import SelectedProspectFrame from "../components/SelectedProspectFrame";
import Faqsubframe from "../components/Faqsubframe";
import Firstnameframe from "../components/Firstnameframe";
import Line from "../components/Line";
import UtilityPagesFrame1 from "../components/UtilityPagesFrame1";
import Copyrights1 from "../components/Copyrights1";
import styles from "./CallerDashboard.module.css";

const CallerDashboard: FunctionComponent = () => {
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
    <div className={styles.callerDashboard}>
      <FrameComponent2
        onLogoFrameTextClick={onLogoFrameTextClick}
        onCampaignDesignTextClick={onCampaignDesignTextClick}
        onCampaignSetupTextClick={onCampaignSetupTextClick}
        onResearchTextClick={onResearchTextClick}
        onCallAnalysisTextClick={onCallAnalysisTextClick}
        onManagerDashboardTextClick={onManagerDashboardTextClick}
      />
      <section className={styles.fRAMECampaignSetup}>
        <div className={styles.fRAMEResearch}>
          <h1 className={styles.callerDashboard1}>Caller Dashboard</h1>
          <div className={styles.pageSubtitle}>
            All you need to create call magic
          </div>
        </div>
      </section>
      <SelectedProspectFrame />
      <section className={styles.notepad}>
        <div className={styles.callScript}>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <h1 className={styles.callScript1}>Call Script</h1>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus pharetra, mollis cras. Luctus pharetra duis nisi,
              fermentum, ipsum et felis odio. Nec semper nunc,s amet f arcu
              interdum Nec semper nunc,s amet f arcu interdum quam.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.egestasAmetFermentum}>
              Egestas amet fermentum aliquam blandit pharetra eleifend. Id duis
              ipsum ac ante. Lectus enim, maecenas adipiscing neque,
              pellentesque nunc ut ipsum. Et adipiscing euismod placerat lacus.
              In sed arcu ullamcorper pharetra, nunc lobortis facilisis cursus
              erat.
            </p>
          </div>
        </div>
      </section>
      <Faqsubframe />
      <Firstnameframe />
      <Line />
      <div className={styles.footerFrame}>
        <div className={styles.homePageFrame} />
      </div>
      <UtilityPagesFrame1 />
      <Copyrights1 />
    </div>
  );
};

export default CallerDashboard;
