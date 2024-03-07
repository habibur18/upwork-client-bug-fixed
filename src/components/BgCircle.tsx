import { FunctionComponent } from "react";
import styles from "./BgCircle.module.css";

const BgCircle: FunctionComponent = () => {
  return (
    <section className={styles.bgCircle}>
      <div className={styles.testimonial}>
        <img className={styles.backgroundIcon} alt="" src="/background.svg" />
        <img
          className={styles.backgroundIcon1}
          alt=""
          src="/background@2x.png"
        />
        <div className={styles.lineVertical}>
          <div className={styles.turigmaaiInfoFrame}>
            <button className={styles.testimonial1}>
              <b className={styles.testimonial2}>Testimonial</b>
            </button>
            <h1 className={styles.trustedBySales}>Trusted by Sales Leaders.</h1>
          </div>
        </div>
        <div className={styles.novemberTopTip}>
          <div className={styles.imageTagMarker}>
            <h1 className={styles.h1}>“</h1>
          </div>
          <div className={styles.lineHorizontal}>
            <div className={styles.frameTurigmaaiContact}>
              <div className={styles.bg} />
              <h2 className={styles.h2}></h2>
            </div>
            <h3 className={styles.outboundPresalesCalling}>
              “Outbound PreSales calling used to be a hated task with a lot of
              manual preparation, frustrating workflows and slow results.
              Turigma.ai has waved a magic wand for us. The power of generative
              AI is unbelievable”
            </h3>
          </div>
          <div className={styles.profileAccountResetCancel}>
            <div className={styles.appDownloadButton}>
              <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
              <div className={styles.textFrame}>
                <h2 className={styles.jamesToriff}>James Toriff</h2>
                <div className={styles.presalesHead}>PreSales Head</div>
              </div>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgCircle;
