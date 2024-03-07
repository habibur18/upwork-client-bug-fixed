import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoAndImage from "./LogoAndImage";
import styles from "./BackgroundFrame.module.css";

const BackgroundFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoAndImageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFeaturesText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='featuresFrameContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <header className={styles.backgroundFrame}>
      <div className={styles.logoImageFrame}>
        <div className={styles.textFrame}>
          <LogoAndImage
            onLogoAndImageContainerClick={onLogoAndImageContainerClick}
          />
        </div>
        <div className={styles.mostPopularArticles}>
          <div className={styles.blogImageImageTagMarketing}>
            <div className={styles.home}>Home</div>
            <div className={styles.presalesAi}> PreSales AI</div>
            <div className={styles.features} onClick={onFeaturesText1Click}>
              Features
            </div>
            <div className={styles.benefits}>Benefits</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.pricing}>
              <p className={styles.pricing1}>Pricing</p>
            </div>
          </div>
        </div>
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <b className={styles.signIn}>Sign In</b>
        </div>
      </div>
    </header>
  );
};

export default BackgroundFrame;
