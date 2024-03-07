import { FunctionComponent } from "react";
import SelectedProspectDetails from "./SelectedProspectDetails";
import styles from "./SelectedProspectFrame.module.css";

const SelectedProspectFrame: FunctionComponent = () => {
  return (
    <section className={styles.selectedProspectFrame}>
      <SelectedProspectDetails
        selectedProspectDetailsAlignSelf="unset"
        selectedProspectDetailsPadding="0px var(--padding-4xs) 0px var(--padding-10xs)"
        selectedProspectDetailsWidth="1292px"
        searchInputBoundingBoxMinWidth="unset"
      />
    </section>
  );
};

export default SelectedProspectFrame;
