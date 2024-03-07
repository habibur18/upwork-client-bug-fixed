import { FunctionComponent } from "react";
import Image1 from "./Image1";
import styles from "./Heroimageboxbackground.module.css";

const Heroimageboxbackground: FunctionComponent = () => {
  return (
    <section className={styles.heroimageboxbackground}>
      <div className={styles.frameParent}>
        <div className={styles.blogParent}>
          <button className={styles.blog}>
            <b className={styles.blog1}>
              <span className={styles.b}>b</span>
              <span className={styles.log}>LOG</span>
            </b>
          </button>
          <h1 className={styles.mostPopularArticles}>Most popular articles</h1>
        </div>
        <div className={styles.blogs}>
          <div className={styles.blog11}>
            <Image1 image="/image-2@2x.png" />
            <div className={styles.blogFrame}>
              <div className={styles.novemberTop}>
                <div className={styles.november152022Parent}>
                  <div className={styles.november152022}>November 15, 2022</div>
                  <h1 className={styles.topTipsForContainer}>
                    <p className={styles.topTipsFor}>
                      10 Top tips for making your
                    </p>
                    <p className={styles.saasProductSticky}>
                      Saas product sticky
                    </p>
                  </h1>
                  <div className={styles.itIsA}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page from when
                    looking at it layout. The point of using Lorem Ipsum
                  </div>
                </div>
                <b className={styles.readMore}>Read More</b>
              </div>
            </div>
          </div>
          <div className={styles.blog2}>
            <Image1
              image="/image-3@2x.png"
              propPadding="var(--padding-mini) var(--padding-22xl) var(--padding-mini) var(--padding-21xl)"
            />
            <div className={styles.blog2Inner}>
              <div className={styles.frameGroup}>
                <div className={styles.november152022Group}>
                  <div className={styles.november1520221}>
                    November 15, 2022
                  </div>
                  <h1 className={styles.automateReportsGeneration}>
                    Automate Reports Generation with Saasup
                  </h1>
                  <div className={styles.itIsA1}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page from when
                    looking at it layout. The point of using Lorem Ipsum
                  </div>
                </div>
                <b className={styles.readMore1}>Read More</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroimageboxbackground;
