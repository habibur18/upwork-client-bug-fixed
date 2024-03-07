import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeFrame.module.css";

const HomeFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonRowContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section className={styles.frameLoginID}>
      <div className={styles.frameNewPswd}>
        <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
        <div className={styles.bannerResetPass}>
          <div className={styles.featuresFrame}>
            <div
              className={styles.buttonRow}
              onClick={onButtonRowContainerClick}
            >
              <h3 className={styles.turigmaai}>Turigma.ai</h3>
              <img
                className={styles.turigmaLogoTransparent1}
                loading="lazy"
                alt=""
                src="/turigma-logo-transparent-1@2x.png"
              />
            </div>
            <div className={styles.turigmaiText}>
              <nav className={styles.homePageFrame}>
                <div className={styles.home}>Home</div>
                <div className={styles.presalesAi}> PreSales AI</div>
                <div className={styles.features}>Features</div>
                <div className={styles.benefits}>Benefits</div>
                <div className={styles.blog}>Blog</div>
              </nav>
            </div>
          </div>
        </div>
        <div className={styles.resetButton}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.loginButton}>
            <div className={styles.button}>
              <div className={styles.background} />
              <input
                className={styles.enterYourLogin}
                placeholder="Enter Your login ID"
                type="text"
              />
            </div>
            <div className={styles.button1}>
              <div className={styles.background1} />
              <div className={styles.enterNewPassword}>Enter new password</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.background2} />
              <div className={styles.reEnterNewPassword}>
                Re-Enter new password
              </div>
            </div>
            <button className={styles.button3} onClick={onButtonClick}>
              <b className={styles.resetPassword}>Reset Password</b>
            </button>
          </div>
          <button className={styles.button4} onClick={onButton1Click}>
            <b className={styles.login}>Login</b>
          </button>
        </div>
        <div className={styles.footerFrame}>
          <h1 className={styles.resetPassword1}>Reset Password</h1>
        </div>
      </div>
    </section>
  );
};

export default HomeFrame;
