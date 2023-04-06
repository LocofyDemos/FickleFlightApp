import { FunctionComponent } from "react";
import styles from "./WeeklyUpdatesContainer.module.css";

const WeeklyUpdatesContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.subscribeSection}>
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeadingSection}>
            <b className={styles.formTitleSubtext}>
              subscribe to our newsletter
            </b>
            <b className={styles.formTitle}>Get weekly updates</b>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.formDescription}>
                Fill in your details to join the party!
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.destinationNameInput}>
                <div className={styles.input}>
                  <div className={styles.inactive}>
                    <div className={styles.muiautocompletetag}>
                      <div className={styles.chip}>
                        <div className={styles.container}>
                          <div className={styles.avatar}>
                            <div className={styles.op}>F</div>
                          </div>
                          <div className={styles.typography}>
                            <div className={styles.chip1}>Chip</div>
                          </div>
                          <img
                            className={styles.cancelIcon}
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.chip}>
                        <div className={styles.container}>
                          <div className={styles.avatar}>
                            <div className={styles.op}>F</div>
                          </div>
                          <div className={styles.typography}>
                            <div className={styles.chip1}>Chip</div>
                          </div>
                          <img
                            className={styles.cancelIcon}
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.yourName}>Your name</div>
                    <div className={styles.muiAutocompleteIndicator}>
                      <div className={styles.iconbutton}>
                        <div className={styles.unstylediconbutton}>
                          <img
                            className={styles.closeIcon}
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.arrow}>
                      <img className={styles.cancelIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.destinationNameInput}>
                <div className={styles.input}>
                  <div className={styles.inactive}>
                    <div className={styles.muiautocompletetag}>
                      <div className={styles.chip}>
                        <div className={styles.container}>
                          <div className={styles.avatar}>
                            <div className={styles.op}>F</div>
                          </div>
                          <div className={styles.typography}>
                            <div className={styles.chip1}>Chip</div>
                          </div>
                          <img
                            className={styles.cancelIcon}
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.chip}>
                        <div className={styles.container}>
                          <div className={styles.avatar}>
                            <div className={styles.op}>F</div>
                          </div>
                          <div className={styles.typography}>
                            <div className={styles.chip1}>Chip</div>
                          </div>
                          <img
                            className={styles.cancelIcon}
                            alt=""
                            src="/cancel.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.yourName}>Email address</div>
                    <div className={styles.muiAutocompleteIndicator}>
                      <div className={styles.iconbutton}>
                        <div className={styles.unstylediconbutton}>
                          <img
                            className={styles.closeIcon}
                            alt=""
                            src="/close.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.arrow}>
                      <img className={styles.cancelIcon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.searchButton}>
              <div className={styles.submit}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.fickleflightBio}>
          <img className={styles.logoIcon} alt="" src="/logo.svg" />
          <div className={styles.fickleFlightDescription}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your needs in you online
            shop.
          </div>
          <div className={styles.socialIcons}>
            <img
              className={styles.facebookIcon}
              alt=""
              src="/entyposocialfacebookwithcircle.svg"
            />
            <img
              className={styles.facebookIcon}
              alt=""
              src="/entyposocialinstagramwithcircle.svg"
            />
            <img
              className={styles.facebookIcon}
              alt=""
              src="/entyposocialtwitterwithcircle.svg"
            />
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.footerLinks}>
          <div className={styles.companySection}>
            <div className={styles.company}>Company</div>
            <div className={styles.companyLinks}>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.aboutUs}>News</div>
              <div className={styles.aboutUs}>Careers</div>
              <div className={styles.howWeWork}>How we work</div>
            </div>
          </div>
          <div className={styles.companySection}>
            <div className={styles.company}>Support</div>
            <div className={styles.companyLinks}>
              <div className={styles.aboutUs}>Account</div>
              <div className={styles.howWeWork}>Support Center</div>
              <div className={styles.aboutUs}>FAQ</div>
              <div className={styles.aboutUs}>Accessibility</div>
            </div>
          </div>
          <div className={styles.moreSection}>
            <div className={styles.company}>More</div>
            <div className={styles.companyLinks}>
              <div className={styles.aboutUs}>Covid Advisory</div>
              <div className={styles.aboutUs}>Airline Fees</div>
              <div className={styles.aboutUs}>Tips</div>
              <div className={styles.howWeWork}>Quarantine Rules</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeeklyUpdatesContainer;
