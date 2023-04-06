import { FunctionComponent } from "react";
import RecommendedHolidayContainer from "./RecommendedHolidayContainer";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recHolidaysTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewHolidaysTop}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayContainer
          packagePrice="/image@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packageType="$899"
        />
        <RecommendedHolidayContainer
          packagePrice="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packageType="$900"
        />
        <RecommendedHolidayContainer
          packagePrice="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packageType="$699"
        />
        <RecommendedHolidayContainer
          packagePrice="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packageType="$789"
        />
      </div>
      <div className={styles.viewHolidaysBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
