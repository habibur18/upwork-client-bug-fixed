import { FunctionComponent, useMemo, type CSSProperties } from "react";
import LogoAndMenu from "./LogoAndMenu";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  /** Style props */
  frameHeaderWidth?: CSSProperties["width"];
  frameHeaderPadding?: CSSProperties["padding"];
  frameHeaderWidth1?: CSSProperties["width"];
  frameHeaderPadding1?: CSSProperties["padding"];
  frameHeaderFlex?: CSSProperties["flex"];

  /** Action props */
  onLogoFrameTextClick?: () => void;
  onCampaignDesignTextClick?: () => void;
  onCampaignSetupTextClick?: () => void;
  onResearchTextClick?: () => void;
  onCallerDashboardTextClick?: () => void;
  onCallAnalysisTextClick?: () => void;
  onManagerDashboardTextClick?: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  frameHeaderWidth,
  frameHeaderPadding,
  frameHeaderWidth1,
  frameHeaderPadding1,
  frameHeaderFlex,
  onLogoFrameTextClick,
  onCampaignDesignTextClick,
  onCampaignSetupTextClick,
  onResearchTextClick,
  onCallerDashboardTextClick,
  onCallAnalysisTextClick,
  onManagerDashboardTextClick,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      width: frameHeaderWidth,
      padding: frameHeaderPadding,
    };
  }, [frameHeaderWidth, frameHeaderPadding]);

  const logoAndMenuStyle: CSSProperties = useMemo(() => {
    return {
      width: frameHeaderWidth1,
      padding: frameHeaderPadding1,
      flex: frameHeaderFlex,
    };
  }, [frameHeaderWidth1, frameHeaderPadding1, frameHeaderFlex]);

  return (
    <header className={styles.logoAndMenuWrapper} style={frameHeaderStyle}>
      <LogoAndMenu />
    </header>
  );
};

export default FrameComponent2;
