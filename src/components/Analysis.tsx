import { FunctionComponent } from "react";
import styles from "./Analysis.module.css";

const Analysis: FunctionComponent = () => {
  return (
    <section className={styles.analysis}>
      <div className={styles.frameFrame}>
        <div className={styles.frameFrame1}>
          <div className={styles.mail}>
            <h1 className={styles.powerfulAndEasyContainer}>
              <p className={styles.powerfulAndEasy}>Powerful and easy to use</p>
              <p className={styles.saasBuilderPlatform}>
                saas builder platform
              </p>
            </h1>
            <div className={styles.noTrainingOrContainer}>
              <p
                className={styles.noTrainingOr}
              >{`No training or setup required. `}</p>
              <p
                className={styles.meshesIntoYour}
              >{`Meshes into your existing workflow and IT setup. `}</p>
              <p className={styles.seeResultsIn}>
                See results in minutes, not months
              </p>
            </div>
            <div className={styles.blogList}>
              <img className={styles.icon} alt="" src="/icon-2.svg" />
              <div className={styles.content}>
                <b className={styles.costEffective}>Cost Effective</b>
                <div className={styles.saves90Cost}>
                  Saves 90% cost, while improving outcomes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </section>
  );
};

export default Analysis;
