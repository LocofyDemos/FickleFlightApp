import { FunctionComponent } from "react";
import styles from "./RecommendedHolidayContainer.module.css";

type RecommendedHolidayContainerType = {
  packagePrice?: string;
  packageDestination?: string;
  packageDuration?: string;
  packageType?: string;
};

const RecommendedHolidayContainer: FunctionComponent<
  RecommendedHolidayContainerType
> = ({ packagePrice, packageDestination, packageDuration, packageType }) => {
  return (
    <button className={styles.recommendedHolidayCard}>
      <img className={styles.imageIcon} alt="" src={packagePrice} />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.destinationParent}>
            <div className={styles.destination}>{packageDestination}</div>
            <div className={styles.duration}>{packageDuration}</div>
          </div>
          <div className={styles.price}>{packageType}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayContainer;
