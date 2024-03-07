import { FunctionComponent } from "react";
import styles from "./TagFrame.module.css";

const TagFrame: FunctionComponent = () => {
  return (
    <div className={styles.tagFrame}>
      <button className={styles.pricing}>
        <b className={styles.pricing1}>Pricing</b>
      </button>
      <h1 className={styles.simpleAndFlexible}>Simple and flexible pricing</h1>
      <div className={styles.simpleTransparentPricing}>
        Simple, transparent pricing. Guaranteed 100X Return on Investment.
      </div>
      <h2 className={styles.acceptedPaymentMethodsContainer}>
        <p className={styles.acceptedPaymentMethods}>
          Accepted Payment Methods
        </p>
      </h2>
      <div className={styles.readMoreFrame}>
        <div className={styles.heroimageboxbackground}>
          <img
            className={styles.image19Icon}
            loading="lazy"
            alt=""
            src="/image-19@2x.png"
          />
          <img
            className={styles.image20Icon}
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
          <img
            className={styles.image21Icon}
            loading="lazy"
            alt=""
            src="/image-21@2x.png"
          />
          <img
            className={styles.image22Icon}
            loading="lazy"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TagFrame;
