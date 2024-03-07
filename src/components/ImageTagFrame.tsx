import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ImageTagFrame.module.css";

export type ImageTagFrameType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const ImageTagFrame: FunctionComponent<ImageTagFrameType> = ({
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const imageTagFrameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div className={styles.imageTagFrame} style={imageTagFrameStyle}>
      <div className={styles.nestedFrames} />
      <h1 className={styles.callForPricing}>Call for pricing</h1>
      <button className={styles.billedYearly}>
        <div className={styles.billedPerCampaign}>Billed per campaign</div>
      </button>
      <div className={styles.nestedFrames1} />
    </div>
  );
};

export default ImageTagFrame;
