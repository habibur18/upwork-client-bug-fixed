import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Sellsidetabframe.module.css";

export type SellsidetabframeType = {
  boxName?: string;
  sellSideTabPic?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding2?: CSSProperties["padding"];
};

const Sellsidetabframe: FunctionComponent<SellsidetabframeType> = ({
  boxName,
  sellSideTabPic,
  propPadding,
  propPadding1,
  propGap,
  propPadding2,
}) => {
  const sellsidetabframeStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sellSideTabFrameStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      gap: propGap,
    };
  }, [propPadding1, propGap]);

  const boxgreyrectangleStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <section className={styles.sellsidetabframe} style={sellsidetabframeStyle}>
      <div className={styles.sellSideTabFrame} style={sellSideTabFrameStyle}>
        <div className={styles.boxname}>
          <div
            className={styles.boxgreyrectangle}
            style={boxgreyrectangleStyle}
          >
            <h1 className={styles.boxName}>{boxName}</h1>
            <div className={styles.boxGreyRectangle} />
          </div>
        </div>
        <img
          className={styles.sellSideTabPicIcon}
          loading="lazy"
          alt=""
          src={sellSideTabPic}
        />
      </div>
    </section>
  );
};

export default Sellsidetabframe;
