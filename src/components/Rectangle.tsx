import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Rectangle.module.css";

const Rectangle: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.rectangle}>
      <img
        className={styles.backgroundIcon}
        alt=""
        src="/background-1@2x.png"
      />
      <div className={styles.textFrame}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.startYourTrial}>Start your trial today</h1>
            <div className={styles.callUsToday}>
              Call us today for a no-commitment pilot. You will see results in
              days. Guaranteed.
            </div>
          </div>
          <div className={styles.button} onClick={onButtonContainerClick}>
            <div className={styles.button1}>
              <b className={styles.yourMailHere}>your mail here...</b>
            </div>
            <button className={styles.button2}>
              <b className={styles.getStarted}>Get Started</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.itisalongestablishedfactthatar}>
        <div className={styles.automate}>
          <div className={styles.reports}>
            <div className={styles.generation}>
              <div className={styles.departments}>Departments</div>
            </div>
            <img className={styles.downloadIcon} alt="" src="/download.svg" />
            <img
              className={styles.moreIcon}
              loading="lazy"
              alt=""
              src="/more.svg"
            />
          </div>
          <div className={styles.infoturigmaai}>
            <div className={styles.mapParent}>
              <img
                className={styles.mapIcon}
                loading="lazy"
                alt=""
                src="/map.svg"
              />
              <div className={styles.overall100}>
                <p className={styles.overall}>Overall</p>
                <p className={styles.p}>100%</p>
              </div>
            </div>
            <div className={styles.text1}>
              <div className={styles.marketing}>
                <div className={styles.analysis}>
                  <div className={styles.lineParent}>
                    <div className={styles.line} />
                    <div className={styles.dentist}>Dentist</div>
                  </div>
                </div>
                <div className={styles.contactInfo}>10%</div>
              </div>
              <div className={styles.mail}>
                <div className={styles.phoneCall}>
                  <div className={styles.pages} />
                  <div className={styles.cardiology}>Cardiology</div>
                </div>
                <div className={styles.aboutUs}>25%</div>
              </div>
              <div className={styles.tagline}>
                <div className={styles.mostPopularArticlesParent}>
                  <div className={styles.mostPopularArticles} />
                  <div className={styles.earNose}>{`Ear Nose & Throat`}</div>
                </div>
                <div className={styles.blogImage}>
                  <div className={styles.tag}>20%</div>
                </div>
              </div>
              <div className={styles.tagline1}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.dermatologist}>Dermatologist</div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.arrowUpward}>
            <div className={styles.currentBalanceParent}>
              <div className={styles.currentBalance}>Current Balance</div>
              <div className={styles.textFrame1}>$85,250</div>
              <div className={styles.arrowUpwardParent}>
                <img
                  className={styles.arrowUpwardIcon}
                  loading="lazy"
                  alt=""
                  src="/arrow-upward.svg"
                />
                <div className={styles.frame}>2.8%</div>
              </div>
            </div>
            <div className={styles.blogs}>
              <div className={styles.bg} />
              <div className={styles.mostpopulararticles}>65%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
