import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SectionInstructions.module.css";

export type SectionInstructionsType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const SectionInstructions: FunctionComponent<SectionInstructionsType> = ({
  propAlignSelf,
  propPadding,
  propWidth,
  propGap,
  propPadding1,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const learnMoreButtonStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding1,
    };
  }, [propGap, propPadding1]);

  return (
    <section
      className={styles.learnMoreButtonWrapper}
      style={frameSectionStyle}
    >
      <div className={styles.learnMoreButton} style={learnMoreButtonStyle}>
        <h1 className={styles.instructions}>Instructions</h1>
        <div className={styles.settingUpAContainer}>
          <p className={styles.settingUpA}>
            Setting up a campaign is as simple as entering basic data in the
            provided Excel file template
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.theProvidedExcel}>
            The provided Excel input file template has 3 tabs. Each of them is
            described below
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionInstructions;
