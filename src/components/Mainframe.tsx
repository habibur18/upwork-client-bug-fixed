import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Mainframe.module.css";

export type MainframeType = {
  caller1Performance?: string;
  callerScoreOverTimeMaxCat?: string;
  image27?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
};

const Mainframe: FunctionComponent<MainframeType> = ({
  caller1Performance,
  callerScoreOverTimeMaxCat,
  image27,
  propPadding,
  propHeight,
}) => {
  const mainframeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const image27IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section className={styles.mainframe} style={mainframeStyle}>
      <h1 className={styles.caller1Performance}>{caller1Performance}</h1>
      <h2 className={styles.callerScoreOver}>{callerScoreOverTimeMaxCat}</h2>
      <img
        className={styles.image27Icon}
        loading="lazy"
        alt=""
        src={image27}
        style={image27IconStyle}
      />
    </section>
  );
};

export default Mainframe;
