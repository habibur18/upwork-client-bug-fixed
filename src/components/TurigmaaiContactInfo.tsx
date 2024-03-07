import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TurigmaaiContactInfo.module.css";

export type TurigmaaiContactInfoType = {
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const TurigmaaiContactInfo: FunctionComponent<TurigmaaiContactInfoType> = ({
  prop,
  propPadding,
  propWidth,
  propWidth1,
  propFlex,
  propBackgroundColor,
}) => {
  const turigmaaiContactInfoStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const bgStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={styles.turigmaaiContactInfo}
      style={turigmaaiContactInfoStyle}
    >
      <div className={styles.bg} />
      <div className={styles.turigmaaiContactInfoInner}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} style={rectangleDivStyle} />
          <div className={styles.frameInner} />
        </div>
      </div>
      <div className={styles.bgParent} style={frameDivStyle}>
        <div className={styles.bg1} style={bgStyle} />
        <div className={styles.div}>{prop}</div>
      </div>
    </div>
  );
};

export default TurigmaaiContactInfo;
