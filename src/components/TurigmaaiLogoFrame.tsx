import { FunctionComponent } from "react";
import styles from "./TurigmaaiLogoFrame.module.css";

const TurigmaaiLogoFrame: FunctionComponent = () => {
  return (
    <div className={styles.turigmaaiLogoFrame}>
      <div className={styles.mailInfoturigmaai}>
        <div className={styles.turigmaaiText}>
          <div className={styles.pagesText}>
            <h2 className={styles.turigmaai}>Turigma.ai</h2>
            <div className={styles.aLeadingSilicon}>
              A leading Silicon Valley pioneer in AI automation of enterprise
              PreSales
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.mailInfobox}>
              <div className={styles.infoturigmaai}>
                <img
                  className={styles.mailIcon}
                  loading="lazy"
                  alt=""
                  src="/mail.svg"
                />
              </div>
              <div className={styles.infoturigmaai1}>info@turigma.ai</div>
            </div>
            <div className={styles.mailInfobox1}>
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
        <div className={styles.utilityPages}>
          <div className={styles.homeAboutIntegrations}>
            <div className={styles.pricingFeaturesContact}>
              <b className={styles.pages}>Pages</b>
              <div className={styles.homeAboutIntegrationsList} />
            </div>
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
          <div className={styles.appDownloadFrame}>
            <div className={styles.utilityPagesLine}>
              <h2 className={styles.utilityPages1}>Utility Pages</h2>
              <div className={styles.contac} />
            </div>
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
  );
};

export default TurigmaaiLogoFrame;
