import { FunctionComponent } from "react";
import BackgroundFrame from "../components/BackgroundFrame";
import AboutUs from "../components/AboutUs";
import Phonecall from "../components/Phonecall";
import Analysis from "../components/Analysis";
import FrameComponent from "../components/FrameComponent";
import BgCircle from "../components/BgCircle";
import TagFrame from "../components/TagFrame";
import TurigmaaiFrame from "../components/TurigmaaiFrame";
import TextFrames from "../components/TextFrames";
import Rectangle from "../components/Rectangle";
import Heroimageboxbackground from "../components/Heroimageboxbackground";
import TurigmaaiLogoFrame from "../components/TurigmaaiLogoFrame";
import Copyrights from "../components/Copyrights";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <BackgroundFrame />
      <section className={styles.itIsALongEstablishedFact}>
        <div className={styles.home}>
          <AboutUs />
          <Phonecall />
        </div>
      </section>
      <Analysis />
      <FrameComponent />
      <BgCircle />
      <section className={styles.frameFrame}>
        <div className={styles.imageFrame}>
          <TagFrame />
        </div>
        <TurigmaaiFrame />
        <TextFrames />
      </section>
      <section className={styles.textFrame}>
        <Rectangle />
      </section>
      <Heroimageboxbackground />
      <img
        className={styles.heroImageBoxBackgroundIcon}
        alt=""
        src="/heroimageboxbackground.svg"
      />
      <div className={styles.lineSeparator}>
        <div className={styles.line} />
      </div>
      <section className={styles.homePageInner}>
        <div className={styles.turigmaaiLogoFrameParent}>
          <TurigmaaiLogoFrame />
          <Copyrights />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
