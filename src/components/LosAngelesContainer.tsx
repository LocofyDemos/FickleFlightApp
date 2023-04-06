import { FunctionComponent } from "react";
import styles from "./LosAngelesContainer.module.css";

const LosAngelesContainer: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.title}>
          <div className={styles.hotelsTagline}>Stays in Los Angeles</div>
          <div className={styles.filterOptions}>
            <div className={styles.filterOption}>
              <div className={styles.recommended}>Recommended</div>
            </div>
            <div className={styles.filterOption1}>
              <div className={styles.recommended}>Price</div>
            </div>
            <div className={styles.filterOption1}>
              <div className={styles.recommended}>Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LosAngelesContainer;
