import { FunctionComponent } from "react";
import styles from "./Firstnameframe.module.css";

const Firstnameframe: FunctionComponent = () => {
  return (
    <section className={styles.firstnameframe}>
      <div className={styles.lastnameframe}>
        <h1 className={styles.notepad}>Notepad</h1>
        <div className={styles.notesCheckboxesParent}>
          <div className={styles.notesCheckboxes}>
            <div className={styles.checkbox1}>
              <div className={styles.firstNameCheckbox} />
              <div className={styles.prospectTitleInCorrect}>
                Prospect title in-correct
              </div>
            </div>
            <div className={styles.checkbox2}>
              <div className={styles.checkbox2Child} />
              <div className={styles.prospectPhoneNumber}>
                Prospect phone number wrong
              </div>
            </div>
            <div className={styles.checkbox3}>
              <div className={styles.checkbox3Child} />
              <div className={styles.prospectDidntAnswer}>
                Prospect didn’t answer
              </div>
            </div>
          </div>
          <div className={styles.companyLocationCheckbox}>
            <h3 className={styles.callNotes}>Call Notes</h3>
            <div className={styles.thereAreMany}>
              There are many variations of passages of Lorem Ipscted humour, or
              randomised words which don't look slightly believable. If you are
              going to use a passage .
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firstnameframe;
