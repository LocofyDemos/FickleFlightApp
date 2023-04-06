import { FunctionComponent } from "react";
import styles from "./ResultsContainer.module.css";

type ResultsContainerType = {
  hotelRoomDescription?: string;
  hotelRoomType?: string;
  hotelName?: string;
  hotelRating?: string;
  hotelReviewCount?: string;
  hotelRoomPrice?: string;
};

const ResultsContainer: FunctionComponent<ResultsContainerType> = ({
  hotelRoomDescription,
  hotelRoomType,
  hotelName,
  hotelRating,
  hotelReviewCount,
  hotelRoomPrice,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img
        className={styles.resultsImageIcon}
        alt=""
        src={hotelRoomDescription}
      />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.resultAndVideo}>
            <div className={styles.hotelType}>{hotelRoomType}</div>
            <b className={styles.hotelName}>{hotelName}</b>
            <div className={styles.review}>
              <div className={styles.stars}>
                <img className={styles.staricon} alt="" src="/vector.svg" />
                <div className={styles.rating}>{hotelRating}</div>
              </div>
              <div className={styles.reviews}>{hotelReviewCount}</div>
            </div>
          </div>
          <img className={styles.videoIcon} alt="" src="/video-icon.svg" />
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricePerNight}>
            <b className={styles.price}>{hotelRoomPrice}</b>
            <div className={styles.night}>/night</div>
          </div>
          <button className={styles.viewDetailsButton}>
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
