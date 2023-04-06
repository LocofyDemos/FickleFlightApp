import { FunctionComponent } from "react";
import PopularDestinationContainer from "./PopularDestinationContainer";
import styles from "./PopularDestinationsContainer.module.css";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.popDestinationItems}>
        <PopularDestinationContainer
          destinationName="/cardimage@2x.png"
          destinationPrice="Paris"
          destinationImageId="$699"
        />
        <PopularDestinationContainer
          destinationName="/cardimage1@2x.png"
          destinationPrice="Greece"
          destinationImageId="$1079"
        />
        <PopularDestinationContainer
          destinationName="/cardimage2@2x.png"
          destinationPrice="Norway"
          destinationImageId="$895"
        />
        <PopularDestinationContainer
          destinationName="/cardimage3@2x.png"
          destinationPrice="Tuscany"
          destinationImageId="$1245"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
