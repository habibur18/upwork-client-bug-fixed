import { FunctionComponent } from "react";
import styles from "./LineSeparator.module.css";

export type LineSeparatorType = {
  /** Action props */
  onPagesContainerClick?: () => void;
  onUtilitiPageContainerClick?: () => void;
};

const LineSeparator: FunctionComponent<LineSeparatorType> = ({
  onPagesContainerClick,
  onUtilitiPageContainerClick,
}) => {
  return (
    <footer className={styles.lineSeparator}>
      <div className={styles.headerFrame} />
      <div className={styles.multiFrame}>
        <div className={styles.subheaderFrame}>
          <div className={styles.companyText}>
            <div className={styles.turigmaLogo}>
              <h3 className={styles.turigmaai}>Turigma.ai</h3>
              <div className={styles.aLeadingSilicon}>
                A leading Silicon Valley pioneer in AI automation of enterprise
                PreSales
              </div>
            </div>
            <div className={styles.pagesFrame}>
              <div className={styles.homePageFrame}>
                <div className={styles.loginIDInput}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                </div>
                <div className={styles.infoturigmaai}>info@turigma.ai</div>
              </div>
              <div className={styles.homePageFrame1}>
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
          <div className={styles.pages} onClick={onPagesContainerClick}>
            <h3 className={styles.pages1}>Pages</h3>
            <div className={styles.loginButton} />
            <div className={styles.homeAboutUsContainer}>
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
            <div className={styles.myProfileFrame} />
            <div className={styles.myProfileAccountContainer}>
              <p className={styles.myProfile}>My Profile</p>
              <p className={styles.account}>Account</p>
              <p className={styles.resetPassword}>Reset Password</p>
              <p className={styles.cancelSubscription}>Cancel Subscription</p>
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.content} />
          </div>
        </div>
        <div className={styles.copyrights}>
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/line1.svg"
          />
          <div className={styles.copyrights1}>
            <div className={styles.copyrightTurigmaai}>
              Copyright © Turigma.ai
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.div1}></div>
              <div className={styles.div2}></div>
              <div className={styles.div3}></div>
              <div className={styles.div4}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LineSeparator;
