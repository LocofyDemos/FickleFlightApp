import { FunctionComponent } from "react";
import BookingOptionsCard from "./BookingOptionsCard";
import styles from "./SearchFilterContainer.module.css";

const SearchFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.results}>10 out of 177 Results</div>
        <img className={styles.seperatorIcon} alt="" src="/seperator.svg" />
      </div>
      <BookingOptionsCard stopOptionsText="Stops" />
      <BookingOptionsCard stopOptionsText="Booking Options" propGap="0" />
      <BookingOptionsCard stopOptionsText="Flight Experience" propGap="16px" />
      <img className={styles.seperatorIcon} alt="" src="/seperator.svg" />
      <BookingOptionsCard stopOptionsText="Airlines" propGap="16px" />
    </div>
  );
};

export default SearchFilterContainer;
