import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoAndImage from "./LogoAndImage";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoAndImageContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/campaignsetup");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/resetpassword");
  }, [navigate]);

  return (
    <section className={styles.loginInner}>
      <div className={styles.bannerParent}>
        <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
        <div className={styles.logoAndImageParent}>
          <LogoAndImage
            onLogoAndImageContainerClick={onLogoAndImageContainerClick}
          />
          <div className={styles.frameWrapper}>
            <nav className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.presalesAi}> PreSales AI</div>
              <div className={styles.features}>Features</div>
              <div className={styles.benefits}>Benefits</div>
              <div className={styles.blog}>Blog</div>
            </nav>
          </div>
        </div>
        <form className={styles.backgoundParent}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.buttonParent}>
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
              <input
                className={styles.enterYourPassword}
                placeholder="Enter Your Password"
                type="text"
              />
            </div>
            <button className={styles.button2} onClick={onButtonClick}>
              <b className={styles.login}>Login</b>
            </button>
          </div>
          <button className={styles.button3} onClick={onButton1Click}>
            <b className={styles.resetPassword}>Reset Password</b>
          </button>
        </form>
        <div className={styles.loginWrapper}>
          <h1 className={styles.login1}>Login</h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
