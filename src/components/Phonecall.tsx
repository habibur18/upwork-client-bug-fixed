import { FunctionComponent } from "react";
import styles from "./Phonecall.module.css";

const Phonecall: FunctionComponent = () => {
  return (
    <div className={styles.phonecall}>
      <div className={styles.pages}>
        <div className={styles.utilityPages}>
          <div
            className={styles.featuresFrame}
            data-scroll-to="featuresFrameContainer"
          >
            <h1 className={styles.disruptingPresalesWithContainer}>
              <p className={styles.disruptingPresales}>Disrupting PreSales</p>
              <p className={styles.withGenerativeAi}>
                with Generative AI Magic
              </p>
            </h1>
            <button className={styles.featureButton}>
              <b className={styles.features}>Features</b>
            </button>
          </div>
        </div>
        <div className={styles.bgParent}>
          <div className={styles.bg}>
            <div className={styles.line}>
              <div className={styles.passwordWrapper}>
                <div className={styles.password}>
                  <div className={styles.rectangle} />
                  <div className={styles.text}>
                    <div className={styles.password1}>Password</div>
                    <div className={styles.rectangleParent}>
                      <div className={styles.rectangle1} />
                      <div className={styles.image}>**********</div>
                    </div>
                    <div className={styles.confirmPassword}>
                      Confirm Password
                    </div>
                    <div className={styles.rectangleGroup}>
                      <div className={styles.rectangle2} />
                      <div className={styles.div}>**********</div>
                    </div>
                  </div>
                  <button className={styles.tag}>
                    <div className={styles.rectangle3} />
                    <b className={styles.login}>LogIn</b>
                  </button>
                  <div className={styles.analysis}>
                    <div className={styles.stroke} />
                    <img
                      className={styles.dashboardIcon}
                      loading="lazy"
                      alt=""
                      src="/dashboard.svg"
                    />
                    <div className={styles.menuBar}>
                      <div className={styles.menuBarChild} />
                      <div className={styles.automate} />
                      <div className={styles.automate1} />
                      <div className={styles.reports} />
                      <div className={styles.automate2} />
                      <div className={styles.automate3} />
                      <div className={styles.automate4} />
                      <div className={styles.saasup} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogSection}>
                <h2 className={styles.aiForPresales}>
                  AI For PreSales Automation
                </h2>
                <div className={styles.hyperCustomizedCaller}>
                  Hyper customized Caller Scripts with your top sales
                  propositions customized for each prospect in your call list.
                  Real-time Sales Signal alerts based on prospect activities.
                </div>
              </div>
              <b className={styles.learnMore}>Learn More</b>
            </div>
          </div>
          <div className={styles.line1}>
            <div className={styles.wrapperIcon}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <h2 className={styles.advancedAnalytics}>Advanced Analytics</h2>
            <div
              className={styles.realTimeFeedbackTo}
            >{`Real-time feedback to Callers to improve micro-aspects of each call. Aggregated feedback to Managers to pinpoint improvements & support.`}</div>
            <b className={styles.learnMore1}>Learn More</b>
          </div>
          <div className={styles.top}>
            <div className={styles.automate5}>
              <div className={styles.wrapperIcon1}>
                <img className={styles.icon1} alt="" src="/icon-1.svg" />
              </div>
              <h2 className={styles.unprecedentedBenefits}>
                Unprecedented Benefits
              </h2>
              <div className={styles.lowerCampaignTimeContainer}>
                <p className={styles.lowerCampaignTime}>
                  90% lower campaign time
                </p>
                <p className={styles.moreSalesConversion}>
                  30% more sales conversion
                </p>
                <p
                  className={styles.empoweredHappy}
                >{`Empowered & happy callers`}</p>
              </div>
              <b className={styles.learnMore2}>Learn More</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonecall;
