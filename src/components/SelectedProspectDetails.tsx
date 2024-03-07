import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SelectedProspectDetails.module.css";

export type SelectedProspectDetailsType = {
  /** Style props */
  selectedProspectDetailsAlignSelf?: CSSProperties["alignSelf"];
  selectedProspectDetailsPadding?: CSSProperties["padding"];
  selectedProspectDetailsWidth?: CSSProperties["width"];
  searchInputBoundingBoxMinWidth?: CSSProperties["minWidth"];
};

const SelectedProspectDetails: FunctionComponent<
  SelectedProspectDetailsType
> = ({
  selectedProspectDetailsAlignSelf,
  selectedProspectDetailsPadding,
  selectedProspectDetailsWidth,
  searchInputBoundingBoxMinWidth,
}) => {
  const selectedProspectDetailsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: selectedProspectDetailsAlignSelf,
      padding: selectedProspectDetailsPadding,
      width: selectedProspectDetailsWidth,
    };
  }, [
    selectedProspectDetailsAlignSelf,
    selectedProspectDetailsPadding,
    selectedProspectDetailsWidth,
  ]);

  const searchInputBoundingBoxStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: searchInputBoundingBoxMinWidth,
    };
  }, [searchInputBoundingBoxMinWidth]);

  return (
    <div
      className={styles.selectedProspectDetails}
      style={selectedProspectDetailsStyle}
    >
      <div className={styles.turigmaaiLogoFrame}>
        <div className={styles.utilitiPagesFrame}>
          <b className={styles.firstName}>First Name</b>
          <b className={styles.phone}>Phone</b>
        </div>
        <div className={styles.utilitiPagesFrame1}>
          <b className={styles.lastName}>Last Name</b>
          <b className={styles.email}>Email</b>
        </div>
        <div className={styles.utilitiPagesFrame2}>
          <b className={styles.company}>Company</b>
          <b className={styles.location}>Location</b>
        </div>
        <div className={styles.utilitiPagesFrame3}>
          <b className={styles.title}>Title</b>
          <b className={styles.campaignSNo}>Campaign S. No.</b>
        </div>
      </div>
      <div className={styles.lineSeparatorFrame}>
        <div className={styles.containerForPages}>
          <img
            className={styles.previousButtonIcon}
            loading="lazy"
            alt=""
            src="/previousbutton1@2x.png"
          />
          <div className={styles.nextButtonFrame}>
            <div className={styles.previousButtonFrame}>
              <div className={styles.next}>Next</div>
            </div>
            <div className={styles.callerFeedbackText}>
              <div className={styles.callerFeedbackTextChild} />
              <img
                className={styles.iocnIcon}
                loading="lazy"
                alt=""
                src="/iocn.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.campaignDesignFrame}>
          <div
            className={styles.searchInputBoundingBox}
            style={searchInputBoundingBoxStyle}
          />
          <button className={styles.searchButton}>
            <b className={styles.search}>Search</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProspectDetails;
