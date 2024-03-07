import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderCellFrame.module.css";

const HeaderCellFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeAboutUsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.headerCellFrame}>
      <div className={styles.categoryResponseCellFrame} />
      <div className={styles.lineSeparatorFrame}>
        <div className={styles.turigmaaiInfoFrame}>
          <div className={styles.mailPhoneCallFrame}>
            <div className={styles.mailinfoturigmaaiFrame}>
              <h3 className={styles.turigmaai}>Turigma.ai</h3>
              <div className={styles.aLeadingSilicon}>
                A leading Silicon Valley pioneer in AI automation of enterprise
                PreSales
              </div>
            </div>
            <div className={styles.textInputFieldFrame}>
              <div className={styles.lineSeparatorFrame1}>
                <div className={styles.turigmaaiInfoFrame1}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                </div>
                <div className={styles.infoturigmaai}>info@turigma.ai</div>
              </div>
              <div className={styles.lineSeparatorFrame2}>
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
          </div>
          <div className={styles.utilitypagescontainer}>
            <div className={styles.aboutussection}>
              <h3 className={styles.pages}>Pages</h3>
              <div className={styles.pricingsection} />
              <div
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
              </div>
            </div>
            <div
              className={styles.utilitiPage}
              onClick={onUtilitiPageContainerClick}
            >
              <h3 className={styles.utilityPages}>Utility Pages</h3>
              <div className={styles.line} />
              <div className={styles.myProfileAccountContainer}>
                <p className={styles.myProfile}>My Profile</p>
                <p className={styles.account}>Account</p>
                <p className={styles.resetPassword}>Reset Password</p>
                <p className={styles.cancelSubscription}>Cancel Subscription</p>
              </div>
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.content} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HeaderCellFrame;
