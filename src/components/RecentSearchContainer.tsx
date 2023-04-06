import { FunctionComponent } from "react";
import styles from "./RecentSearchContainer.module.css";

type RecentSearchContainerType = {
  flightOrigin?: string;
  flightDestination?: string;
  flightOriginCode?: string;
  flightDepartureDate?: string;
};

const RecentSearchContainer: FunctionComponent<RecentSearchContainerType> = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  flightDepartureDate,
}) => {
  return (
    <div className={styles.recentSearch}>
      <div className={styles.toAndFrom}>
        <b className={styles.departure}>{flightOrigin}</b>
        <img className={styles.planeicon} alt="" src={flightDestination} />
        <b className={styles.arrival}>{flightOriginCode}</b>
      </div>
      <div className={styles.departureInfo}>
        <b className={styles.departure}>{`Depart on: `}</b>
        <div className={styles.departure}>{flightDepartureDate}</div>
      </div>
    </div>
  );
};

export default RecentSearchContainer;
