import { FunctionComponent } from "react";
import styles from "./BookingContainer.module.css";

type BookingContainerType = {
  flightDetails?: string;
  airlineDetails?: string;
  flightPrice?: string;
  originAirportCode?: string;
  destinationAirportCode?: string;
  originCity?: string;
  destinationCity?: string;
  classType?: string;
  numberOfAdults?: string;
  bookingDate?: string;
  bookingPlatform?: string;
  timeSinceBooking?: string;
};

const BookingContainer: FunctionComponent<BookingContainerType> = ({
  flightDetails,
  airlineDetails,
  flightPrice,
  originAirportCode,
  destinationAirportCode,
  originCity,
  destinationCity,
  classType,
  numberOfAdults,
  bookingDate,
  bookingPlatform,
  timeSinceBooking,
}) => {
  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img className={styles.airlinelogoIcon} alt="" src={flightDetails} />
          <div className={styles.airlinename}>{airlineDetails}</div>
        </div>
        <div className={styles.price}>{flightPrice}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure}>
          <div className={styles.depcode}>{originAirportCode}</div>
          <div className={styles.depname}>{destinationAirportCode}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.depcode}>{originCity}</div>
          <div className={styles.arrname}>{destinationCity}</div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.flightClass}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.airlinename}>{classType}</div>
        </div>
        <div className={styles.flightClass}>
          <img className={styles.classIcon} alt="" src="/calender.svg" />
          <div className={styles.airlinename}>{numberOfAdults}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.bookedOnParent}>
          <div className={styles.airlinename}>{bookingDate}</div>
          <div className={styles.provider1}>{bookingPlatform}</div>
        </div>
        <div className={styles.timeago}>{timeSinceBooking}</div>
      </div>
    </div>
  );
};

export default BookingContainer;
