import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Pages from "./Pages";
import UtilitiPage from "./UtilitiPage";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPagesContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUtilitiPageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.turigmaaiFrameWrapper}>
      <div className={styles.turigmaaiFrame}>
        <div className={styles.pages}>
          <div className={styles.home}>
            <h2 className={styles.turigmaai}>Turigma.ai</h2>
          </div>
          <div className={styles.home1}>
            <h3 className={styles.aLeadingSilicon}>
              A leading Silicon Valley pioneer in AI automation of enterprise
              PreSales
            </h3>
          </div>
          <div className={styles.home2}>
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
          <div className={styles.home3}>
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
        <Pages onPagesContainer1Click={onPagesContainer1Click} />
        <UtilitiPage
          onUtilitiPageContainerClick={onUtilitiPageContainerClick}
        />
        <div className={styles.appDownload}>
          <div className={styles.content} />
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent1;
