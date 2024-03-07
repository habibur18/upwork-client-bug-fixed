import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TurigmaaiContactInfo from "./TurigmaaiContactInfo";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGetStartedButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.integrations}>
        <div className={styles.pricing}>
          <h1 className={styles.title}>Automate Your Presales</h1>
          <h3 className={styles.subTitle}>
            <p className={styles.worlds1stPresales}>
              World’s 1st PreSales Automation Platform
            </p>
            <p className={styles.forB2bEnterprises}>for B2B Enterprises</p>
          </h3>
          <div
            className={styles.getStartedButton}
            onClick={onGetStartedButtonContainerClick}
          >
            <div className={styles.getStartedButtonChild} />
            <b className={styles.getStarted}>Get Started</b>
          </div>
        </div>
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.arrowFrameNode}>
          <div className={styles.ellipseBackground}>
            <div className={styles.containerFrame}>
              <img
                className={styles.logoIcon}
                loading="lazy"
                alt=""
                src="/logo@2x.png"
              />
              <div className={styles.search}>
                <div className={styles.menuBlock} />
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.searchHere}>Search here...</div>
              </div>
            </div>
            <div className={styles.blogTopicTitle}>
              <div className={styles.wrapperUser}>
                <img className={styles.userIcon} alt="" src="/user@2x.png" />
              </div>
              <img
                className={styles.notifyIcon}
                loading="lazy"
                alt=""
                src="/notify.svg"
              />
            </div>
          </div>
          <div className={styles.imageTagFrameNode}>
            <div className={styles.novemberBlogSectionNode}>
              <img
                className={styles.menuIcon}
                loading="lazy"
                alt=""
                src="/menu.svg"
              />
              <div className={styles.blogArticleContentNode}>
                <div className={styles.backgroundBox}>
                  <div className={styles.turigmaaiContactInfo}>
                    <div className={styles.bg} />
                    <div className={styles.communicationFrameNode}>
                      <div className={styles.frameWithMailPhoneNode}>
                        <div className={styles.pageGroup} />
                        <div className={styles.addOnsSectionBlock} />
                        <div className={styles.blogList} />
                      </div>
                    </div>
                    <div className={styles.bgParent}>
                      <div className={styles.bg1} />
                      <div className={styles.frameGroup}>35%</div>
                    </div>
                  </div>
                  <TurigmaaiContactInfo prop="65%" />
                  <TurigmaaiContactInfo
                    prop="75%"
                    propPadding="var(--padding-3xs) var(--padding-3xs) var(--padding-6xs) var(--padding-5xs)"
                    propWidth="37.3px"
                    propWidth1="unset"
                    propFlex="1"
                    propBackgroundColor="#fe8c68"
                  />
                  <TurigmaaiContactInfo
                    prop="75%"
                    propPadding="var(--padding-3xs) var(--padding-2xs) var(--padding-6xs) var(--padding-3xs)"
                    propWidth="37.3px"
                    propWidth1="unset"
                    propFlex="1"
                    propBackgroundColor="#ffbb54"
                  />
                </div>
                <div className={styles.imageBox}>
                  <div className={styles.lineSeparator}>
                    <div className={styles.bg2}>
                      <div className={styles.draw}>
                        <div className={styles.background} />
                        <div className={styles.blog}>
                          <div className={styles.blogHeader}>
                            <div className={styles.readMore}>
                              <div className={styles.arrowUpward} />
                              <div className={styles.income}>Income</div>
                            </div>
                          </div>
                          <div className={styles.turigmaaiInfoWrapper}>
                            <div className={styles.turigmaaiInfo}>
                              <div className={styles.mailInfoturigmaai}>
                                <div
                                  className={styles.mailInfoturigmaaiChild}
                                />
                              </div>
                              <div className={styles.expenses}>Expenses</div>
                            </div>
                          </div>
                          <div className={styles.utilityPages}>
                            <button className={styles.allTime}>
                              <div className={styles.btn} />
                              <div className={styles.monthly}>Monthly</div>
                              <img
                                className={styles.keyboardArrowDownIcon}
                                alt=""
                                src="/keyboard-arrow-down.svg"
                              />
                            </button>
                          </div>
                          <img
                            className={styles.menuIcon1}
                            alt=""
                            src="/menu-1.svg"
                          />
                        </div>
                        <div className={styles.frameWithImage}>
                          <div className={styles.turigmaaiFrame}>
                            <div className={styles.lineSeparator1}>
                              <div className={styles.k}>30K</div>
                              <div className={styles.k1}>15K</div>
                              <div className={styles.k2}>10K</div>
                              <div className={styles.textFrame}>0</div>
                            </div>
                            <div className={styles.blogList1}>
                              <div className={styles.homeHeader} />
                              <div className={styles.homeHeader1} />
                              <div className={styles.homeHeader2} />
                              <div className={styles.homeHeader3} />
                              <img
                                className={styles.patternIcon}
                                alt=""
                                src="/pattern.svg"
                              />
                              <img
                                className={styles.patternIcon1}
                                alt=""
                                src="/pattern-1.svg"
                              />
                              <img
                                className={styles.hoverIcon}
                                loading="lazy"
                                alt=""
                                src="/hover.svg"
                              />
                            </div>
                          </div>
                          <div className={styles.myProfileFrame}>
                            <div className={styles.resetPasswordButton}>
                              <div className={styles.cancelSubscriptionButton}>
                                <div className={styles.jan}>Jan</div>
                              </div>
                              <div className={styles.cancelSubscriptionButton1}>
                                <div className={styles.feb}>Feb</div>
                              </div>
                              <div className={styles.mar}>Mar</div>
                              <div className={styles.cancelSubscriptionButton2}>
                                <div className={styles.apr}>Apr</div>
                              </div>
                              <div className={styles.cancelSubscriptionButton3}>
                                <div className={styles.may}>May</div>
                              </div>
                              <div className={styles.cancelSubscriptionButton4}>
                                <div className={styles.jun}>Jun</div>
                              </div>
                              <div className={styles.cancelSubscriptionButton5}>
                                <div className={styles.jul}>Jul</div>
                              </div>
                              <div className={styles.aug}>Aug</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.bottomSectionIcon}
                      loading="lazy"
                      alt=""
                      src="/bottom-section.svg"
                    />
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.background1} />
                    <div className={styles.copyrightContainer}>
                      <div className={styles.line}>
                        <div className={styles.blogTitle}>
                          <div className={styles.myCard}>My Card</div>
                          <img
                            className={styles.filterIcon}
                            alt=""
                            src="/filter.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.card}>
                        <div className={styles.background2} />
                        <div className={styles.frameBlogTitle}>
                          <div className={styles.textMostPopular}>
                            <div className={styles.rectangleBlogImage}>
                              <div className={styles.bgEllipse}>
                                <div className={styles.background3} />
                                <div className={styles.balanse}>$12,500</div>
                              </div>
                              <b className={styles.description}>USD</b>
                            </div>
                            <img
                              className={styles.chipIcon}
                              alt=""
                              src="/chip@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.textMarketing}>
                          <div className={styles.rectangleAnalysis}>
                            <div className={styles.line1} />
                            <div className={styles.line2} />
                          </div>
                          <div className={styles.textTopTips}>
                            <div className={styles.blogAutomateReports} />
                            <div className={styles.blogAutomateReports1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.imageReportIcon}>
                      <div className={styles.frameBlog}>
                        <div className={styles.lastTransactions}>
                          Last Transactions
                        </div>
                        <img
                          className={styles.menuIcon2}
                          alt=""
                          src="/menu-2.svg"
                        />
                      </div>
                      <div className={styles.rectangleFeatured}>
                        <div className={styles.bg3} />
                        <div className={styles.textArea}>
                          <div className={styles.line3} />
                          <div className={styles.blog1}>
                            <div className={styles.blogTitle1}>
                              <div className={styles.bg4} />
                              <b className={styles.mj}>MJ</b>
                            </div>
                            <div className={styles.automate}>
                              <div className={styles.line4} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.saasProduct}>
                          <div className={styles.sticky}>+$120.20</div>
                        </div>
                      </div>
                      <div className={styles.rectangleFeatured1}>
                        <div className={styles.bg5} />
                        <div className={styles.lineParent}>
                          <div className={styles.line5} />
                          <div className={styles.rectangleBackground}>
                            <div className={styles.frameContact}>
                              <div className={styles.bg6} />
                              <b className={styles.an}>AN</b>
                            </div>
                            <div className={styles.frameTitle}>
                              <div className={styles.line6} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.wrapper}>
                          <div className={styles.div}>-$85.20</div>
                        </div>
                      </div>
                      <div className={styles.rectangleFeatured2}>
                        <div className={styles.bg7} />
                        <div className={styles.frameParent}>
                          <div className={styles.bgGroup}>
                            <div className={styles.bg8} />
                            <img
                              className={styles.lineSeparatorIcon}
                              alt=""
                              src="/line-separator.svg"
                            />
                          </div>
                          <div className={styles.lineGroup}>
                            <div className={styles.line7} />
                            <div className={styles.lineWrapper}>
                              <div className={styles.line8} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.div1}>+$120.20</div>
                      </div>
                      <div className={styles.rectangleFeatured3}>
                        <div className={styles.bg9} />
                        <div className={styles.lineContainer}>
                          <div className={styles.line9} />
                          <div className={styles.frameContainer}>
                            <div className={styles.bgContainer}>
                              <div className={styles.bg10} />
                              <b className={styles.mj1}>MJ</b>
                            </div>
                            <div className={styles.lineFrame}>
                              <div className={styles.line10} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.container}>
                          <div className={styles.div2}>+$120.20</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
