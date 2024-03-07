import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UtilitiPage.module.css";

export type UtilitiPageType = {
  /** Style props */
  utilitiPageWidth?: CSSProperties["width"];
  utilitiPageFlex?: CSSProperties["flex"];
  utilitiPageMinWidth?: CSSProperties["minWidth"];

  /** Action props */
  onUtilitiPageContainerClick?: () => void;
};

const UtilitiPage: FunctionComponent<UtilitiPageType> = ({
  utilitiPageWidth,
  utilitiPageFlex,
  utilitiPageMinWidth,
  onUtilitiPageContainerClick,
}) => {
  const utilitiPageStyle: CSSProperties = useMemo(() => {
    return {
      width: utilitiPageWidth,
      flex: utilitiPageFlex,
      minWidth: utilitiPageMinWidth,
    };
  }, [utilitiPageWidth, utilitiPageFlex, utilitiPageMinWidth]);

  return (
    <div
      className={styles.utilitiPage}
      onClick={onUtilitiPageContainerClick}
      style={utilitiPageStyle}
    >
      <h2 className={styles.utilityPages}>Utility Pages</h2>
      <div className={styles.cancelButton} />
      <h3 className={styles.myProfileAccountContainer}>
        <p className={styles.myProfile}>My Profile</p>
        <p className={styles.account}>Account</p>
        <p className={styles.resetPassword}>Reset Password</p>
        <p className={styles.cancelSubscription}>Cancel Subscription</p>
      </h3>
    </div>
  );
};

export default UtilitiPage;
