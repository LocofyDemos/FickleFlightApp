import { FunctionComponent, useCallback } from "react";
import RecentSearchContainer from "./RecentSearchContainer";
import { useNavigate } from "react-router-dom";
import TripMenuItemContainer from "./TripMenuItemContainer";
import styles from "./RecentSearchesContainer.module.css";

const RecentSearchesContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTripMenuItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.upcomingFlightSection}>
      <b className={styles.recentSearches}>Recent Searches</b>
      <div className={styles.flightDetails}>
        <div className={styles.recentSearchesSection}>
          <RecentSearchContainer
            flightOrigin="SIN"
            flightDestination="/planeicon.svg"
            flightOriginCode="LAX"
            flightDepartureDate="7 Sep 2023"
          />
          <RecentSearchContainer
            flightOrigin="MY"
            flightDestination="/planeicon1.svg"
            flightOriginCode="DUB"
            flightDepartureDate="9 Sep 2023"
          />
        </div>
        <div className={styles.prepareMenu}>
          <div className={styles.recentSearches}>Prepare for your trip</div>
          <div className={styles.tripMenu}>
            <button
              className={styles.tripMenuItem}
              onClick={onTripMenuItemClick}
            >
              <div className={styles.icon}>
                <img className={styles.iconVector} alt="" src="/icon3.svg" />
              </div>
              <div className={styles.text}>Hotel</div>
            </button>
            <TripMenuItemContainer
              attractionId="/icon4.svg"
              commuteId="Attractions"
            />
            <button className={styles.tripMenuItem}>
              <div className={styles.icon1}>
                <img className={styles.iconVector} alt="" src="/icon5.svg" />
              </div>
              <div className={styles.text}>Eats</div>
            </button>
            <TripMenuItemContainer
              attractionId="/icon6.svg"
              commuteId="Commute"
              propBackgroundColor="#fdbf00"
            />
            <button className={styles.tripMenuItem}>
              <div className={styles.icon2}>
                <img className={styles.iconVector} alt="" src="/icon7.svg" />
              </div>
              <div className={styles.text}>Taxi</div>
            </button>
            <button className={styles.tripMenuItem}>
              <div className={styles.icon3}>
                <img className={styles.iconVector} alt="" src="/icon8.svg" />
              </div>
              <div className={styles.text}>Movies</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
