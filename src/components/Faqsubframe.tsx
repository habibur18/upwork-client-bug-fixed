import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Faqsubframe.module.css";

const Faqsubframe: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFAQ1Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ2ContainerClick = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ3Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ4Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ5Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ6Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ7Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  const onFAQ8Click = useCallback(() => {
    navigate("/popup1");
  }, [navigate]);

  return (
    <section className={styles.faqsubframe}>
      <div className={styles.faqboxes}>
        <div className={styles.faqHeader}>
          <h1 className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </h1>
        </div>
        <div className={styles.faqSubFrame}>
          <div className={styles.faqBoxes}>
            <textarea
              className={styles.faq1}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ1Click}
            />
            <div className={styles.faq2} onClick={onFAQ2ContainerClick}>
              <div className={styles.topic1}>Topic 1</div>
            </div>
            <textarea
              className={styles.faq3}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ3Click}
            />
            <textarea
              className={styles.faq4}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ4Click}
            />
            <textarea
              className={styles.faq5}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ5Click}
            />
            <textarea
              className={styles.faq6}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ6Click}
            />
            <textarea
              className={styles.faq7}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ7Click}
            />
            <textarea
              className={styles.faq8}
              placeholder="Topic 1"
              rows={9}
              cols={13}
              onClick={onFAQ8Click}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqsubframe;
