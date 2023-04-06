import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import styles from "./PopularStaysContainer.module.css";

const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          reviewText="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          pricePerNight="$575/night"
          accommodationImageUrl="/video-icon1.svg"
          rating="4.9"
          reviewCount="(60 reviews)"
        />
        <HotelCardContainer
          reviewText="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          accommodationImageUrl="/video-icon2.svg"
          rating="4.8"
          reviewCount="(116 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          reviewText="/unsplashrlwe8f8anoc2@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          accommodationImageUrl="/video-icon3.svg"
          rating="4.7"
          reviewCount="(78 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          reviewText="/unsplashrlwe8f8anoc3@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          pricePerNight="$244/night"
          accommodationImageUrl="/video-icon3.svg"
          rating="4.6"
          reviewCount="(63 reviews)"
          propMarginBottom="unset"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
