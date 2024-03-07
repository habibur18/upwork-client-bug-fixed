import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CopyrightInfo.module.css";

export type CopyrightInfoType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight?: CSSProperties["height"];
};

const CopyrightInfo: FunctionComponent<CopyrightInfoType> = ({
  propPadding,
  propMaxHeight,
  propHeight,
}) => {
  const copyrightInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const lineIconStyle: CSSProperties = useMemo(() => {
    return {
      maxHeight: propMaxHeight,
      height: propHeight,
    };
  }, [propMaxHeight, propHeight]);

  return (
    <div className={styles.copyrightInfo} style={copyrightInfoStyle}>
      <div className={styles.copyrights}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
          style={lineIconStyle}
        />
        <div className={styles.copyrights1}>
          <h3 className={styles.copyrightTurigmaai}>Copyright © Turigma.ai</h3>
          <div className={styles.socialMedia}>
            <div className={styles.div}></div>
            <div className={styles.div1}></div>
            <div className={styles.div2}></div>
            <div className={styles.div3}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightInfo;
