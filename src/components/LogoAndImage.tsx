import { FunctionComponent } from "react";
import styles from "./LogoAndImage.module.css";

export type LogoAndImageType = {
  /** Action props */
  onLogoAndImageContainerClick?: () => void;
};

const LogoAndImage: FunctionComponent<LogoAndImageType> = ({
  onLogoAndImageContainerClick,
}) => {
  return (
    <div className={styles.logoAndImage} onClick={onLogoAndImageContainerClick}>
      <h3 className={styles.turigmaai}>Turigma.ai</h3>
      <img
        className={styles.turigmaLogoTransparent1}
        loading="lazy"
        alt=""
        src="/turigma-logo-transparent-1@2x.png"
      />
    </div>
  );
};

export default LogoAndImage;
