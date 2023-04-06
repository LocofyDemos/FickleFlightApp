import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HotelCardContainer.module.css";

type HotelCardContainerType = {
  reviewText?: string;
  accommodationType?: string;
  accommodationName?: string;
  pricePerNight?: string;
  accommodationImageUrl?: string;
  rating?: string;
  reviewCount?: string;

  /** Style props */
  propMarginBottom?: Property.MarginBottom;
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  reviewText,
  accommodationType,
  accommodationName,
  pricePerNight,
  accommodationImageUrl,
  rating,
  reviewCount,
  propMarginBottom,
}) => {
  const popularHotelCardStyle: CSS.Properties = useMemo(() => {
    return {
      marginBottom: propMarginBottom,
    };
  }, [propMarginBottom]);

  return (
    <div className={styles.popularHotelCard} style={popularHotelCardStyle}>
      <div className={styles.hotelCard}>
        <img className={styles.imageIcon} alt="" src={reviewText} />
        <div className={styles.stayDetails}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.type}>{accommodationType}</div>
            <b className={styles.title}>{accommodationName}</b>
            <div className={styles.price}>{pricePerNight}</div>
          </div>
          <button className={styles.video}>
            <img
              className={styles.videoIcon}
              alt=""
              src={accommodationImageUrl}
            />
          </button>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img className={styles.staricon} alt="" src="/staricon.svg" />
            <div className={styles.rating1}>{rating}</div>
          </div>
          <div className={styles.reviews}>{reviewCount}</div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
