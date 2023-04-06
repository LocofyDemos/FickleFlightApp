import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./FlightContainer.module.css";

type FlightContainerType = {
  flightDetails?: string;
  airlineName?: string;
  departureTime?: string;
  flightDuration?: string;
  arrivalTime?: string;
  flightPrice?: string;

  /** Style props */
  propOverflow?: Property.Overflow;
  propTransform?: Property.Transform;
};

const FlightContainer: FunctionComponent<FlightContainerType> = ({
  flightDetails,
  airlineName,
  departureTime,
  flightDuration,
  arrivalTime,
  flightPrice,
  propOverflow,
  propTransform,
}) => {
  const airlineIconStyle: CSS.Properties = useMemo(() => {
    return {
      overflow: propOverflow,
      transform: propTransform,
    };
  }, [propOverflow, propTransform]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img
          className={styles.airlineIcon}
          alt=""
          src={flightDetails}
          style={airlineIconStyle}
        />
        <div className={styles.airlineName}>{airlineName}</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.departureTime}>{departureTime}</div>
          <div className={styles.departureAirport}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.travelTime}>{flightDuration}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.departureTime}>{arrivalTime}</div>
          <div className={styles.departureAirport}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img className={styles.separatorIcon} alt="" src="/vector-1.svg" />
        <b className={styles.price}>{flightPrice}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
