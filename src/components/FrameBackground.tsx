import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UtilitiPage from "./UtilitiPage";
import styles from "./FrameBackground.module.css";

const FrameBackground: FunctionComponent = () => {
  const navigate = useNavigate();

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonLearnMoreContainerClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  const onHomeAboutUsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={styles.frameBackground}>
      <div className={styles.builtForEnterpriseFrameWrapper}>
        <div className={styles.builtForEnterpriseFrame}>
          <div className={styles.builtForEnterpriseFrameInner}>
            <div className={styles.builtForEnterprisesTurigmaWrapper}>
              <h1 className={styles.builtForEnterprisesContainer}>
                <span className={styles.builtForEnterprisesContainer1}>
                  <p className={styles.builtForEnterprises}>
                    <b>Built For Enterprises</b>
                  </p>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <ul className={styles.turigmaIsrAutomatesEachOf}>
                    <li className={styles.turigmaIsrAutomatesEachOf1}>
                      <span>
                        Turigma-ISR automates each of these steps and provides
                        automation for all key persona's involved:
                      </span>
                    </li>
                    <li className={styles.researchTeamEliminateCostl}>
                      <span>
                        Research Team: eliminate costly time conducting campaign
                        reserach and training
                      </span>
                    </li>
                    <li className={styles.callersPreparedCallingScri}>
                      <span>
                        Callers: Prepared calling scripts customized to each
                        Target. Automated Feedback on each call
                      </span>
                    </li>
                    <li>
                      <span>
                        Management: Campaign analytics, Caller performance
                        analytics, with drill downs to each call, time-trends,
                        areas of improvement etc.
                      </span>
                    </li>
                  </ul>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.builtForEnterprisesFrame}>
        <h1 className={styles.startCampaign}>Start Campaign</h1>
        <div
          className={styles.buttonLearnMore}
          onClick={onButtonLearnMoreContainerClick}
        >
          <h1 className={styles.startNow}>Start Now</h1>
        </div>
      </div>
      <div className={styles.startCampaignButton}>
        <div className={styles.lineSeparator} />
      </div>
      <footer className={styles.turigmaaiFrame}>
        <div className={styles.utilityPagesFrame}>
          <div className={styles.turigmaaiFrame1}>
            <h2 className={styles.turigmaai}>Turigma.ai</h2>
          </div>
          <div className={styles.turigmaaiFrame2}>
            <h3 className={styles.aLeadingSilicon}>
              A leading Silicon Valley pioneer in AI automation of enterprise
              PreSales
            </h3>
          </div>
          <div className={styles.turigmaaiFrame3}>
            <div className={styles.mailWrapper}>
              <img
                className={styles.mailIcon}
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
            </div>
            <h3 className={styles.infoturigmaai}>info@turigma.ai</h3>
          </div>
          <div className={styles.turigmaaiFrame4}>
            <div className={styles.phoneCallWrapper}>
              <img
                className={styles.phoneCallIcon}
                loading="lazy"
                alt=""
                src="/phonecall.svg"
              />
            </div>
            <div className={styles.div}>408-418-8163</div>
          </div>
        </div>
        <div className={styles.pagesFrame}>
          <div className={styles.utilityPagesFrame1}>
            <h2 className={styles.pages}>Pages</h2>
            <div className={styles.resetPasswordCancelSubscrip} />
            <h3
              className={styles.homeAboutUsContainer}
              onClick={onHomeAboutUsClick}
            >
              <p className={styles.home}>Home</p>
              <p className={styles.aboutUs}>About Us</p>
              <p className={styles.integrations}>
                <b className={styles.integrations1}>Integrations</b>
                <span></span>
              </p>
              <p className={styles.pricing}>Pricing</p>
              <p className={styles.features}>Features</p>
              <p className={styles.contactUs}>Contact Us</p>
            </h3>
          </div>
          <UtilitiPage
            utilitiPageWidth="unset"
            utilitiPageFlex="1"
            utilitiPageMinWidth="137px"
            onUtilitiPageContainerClick={onUtilitiPageContainerClick}
          />
        </div>
        <div className={styles.appDownload}>
          <div className={styles.content} />
        </div>
      </footer>
    </section>
  );
};

export default FrameBackground;
