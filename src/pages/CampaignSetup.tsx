import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SectionInstructions from "../components/SectionInstructions";
import Sellsidetabframe from "../components/Sellsidetabframe";
import FrameComponent1 from "../components/FrameComponent1";
import CopyrightInfo from "../components/CopyrightInfo";
import styles from "./CampaignSetup.module.css";

const CampaignSetup: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoFrameTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCampaignDesignTextClick = useCallback(() => {
    navigate("/campaigndesign");
  }, [navigate]);

  const onCampaignSetupText1Click = useCallback(() => {
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

  const onLearnMoreButtonContainerClick = useCallback(() => {
    navigate("/campaigndesign");
  }, [navigate]);

  return (
    <div className={styles.campaignsetup}>
      <header className={styles.logoandmenu}>
        <div className={styles.logoAndMenu}>
          <h2 className={styles.logoFrame} onClick={onLogoFrameTextClick}>
            Turigma.ai
          </h2>
          <div className={styles.menuFrame}>
            <div
              className={styles.campaignDesign}
              onClick={onCampaignDesignTextClick}
            >
              Campaign Design
            </div>
            <div
              className={styles.campaignSetup}
              onClick={onCampaignSetupText1Click}
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
      <section className={styles.settingstabframeWrapper}>
        <div className={styles.settingstabframe}>
          <h1 className={styles.campaignSetup1}>Campaign Setup</h1>
          <h3 className={styles.pageSubtitle}>Setup and launch in minutes</h3>
        </div>
      </section>
      <SectionInstructions />
      <Sellsidetabframe
        boxName="Sell-side Tab"
        sellSideTabPic="/sellsidetabpic@2x.png"
      />
      <section className={styles.sellsidetabframe}>
        <div className={styles.buySideTabFrame}>
          <div className={styles.buySideTabFrameInner}>
            <div className={styles.boxNameParent}>
              <h1 className={styles.boxName}>Buy-side Tab</h1>
              <div className={styles.boxGreyRectangle} />
            </div>
          </div>
          <img
            className={styles.buySideTabPicIcon}
            loading="lazy"
            alt=""
            src="/buysidetabpic@2x.png"
          />
        </div>
      </section>
      <Sellsidetabframe
        boxName="Campaign-settings Tab"
        sellSideTabPic="/image-25@2x.png"
        propPadding="0px var(--padding-44xl)"
        propPadding1="var(--padding-7xl) var(--padding-lg) var(--padding-9xl) var(--padding-4xl)"
        propGap="21px 0px"
        propPadding2="0px var(--padding-12xs) 0px 0px"
      />
      <section className={styles.buysidetabpic}>
        <div className={styles.learnMoreAboutCampaignDesiParent}>
          <h1 className={styles.learnMoreAbout}>
            Learn More About Campaign Design
          </h1>
          <div
            className={styles.learnMoreButton}
            onClick={onLearnMoreButtonContainerClick}
          >
            <b className={styles.learnMore}>Learn More</b>
          </div>
        </div>
      </section>
      <div className={styles.line} />
      <FrameComponent1 />
      <CopyrightInfo />
    </div>
  );
};

export default CampaignSetup;
