import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UploadSellSideDocs1.module.css";

export type UploadSellSideDocsType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const UploadSellSideDocs: FunctionComponent<UploadSellSideDocsType> = ({
  propWidth,
  propAlignSelf,
}) => {
  const uploadSellSideDocsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={styles.uploadSellSideDocs} style={uploadSellSideDocsStyle}>
      <div className={styles.uploadSellSideDocsChild} />
      <img
        className={styles.image26Icon}
        loading="lazy"
        alt=""
        src="/image-26@2x.png"
      />
      <div className={styles.startanalysisframeFRAME}>
        <div className={styles.campaignInfoFrame} />
        <h1 className={styles.uploadDocuments}>Upload Documents</h1>
      </div>
    </div>
  );
};

export default UploadSellSideDocs;
