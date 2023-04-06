import { FunctionComponent } from "react";
import ResultsContainer from "./ResultsContainer";
import styles from "./HotelResultsContainer.module.css";

const HotelResultsContainer: FunctionComponent = () => {
  return (
    <div className={styles.hotelResults}>
      <div className={styles.resultsSumamry}>
        <div className={styles.results}>200+ results</div>
        <div className={styles.filters}>
          <div className={styles.filtersText}>Filters</div>
          <img className={styles.filtersIcon} alt="" src="/filters-icon.svg" />
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultCardsCol}>
          <ResultsContainer
            hotelRoomDescription="/unsplashs6ch7n3eoqy@2x.png"
            hotelRoomType="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            hotelRating="4.7"
            hotelReviewCount="(1,136 reviews)"
            hotelRoomPrice="$S 286"
          />
          <ResultsContainer
            hotelRoomDescription="/unsplashs6ch7n3eoqy1@2x.png"
            hotelRoomType="Bed in Quad"
            hotelName="Freehand Los Angel..."
            hotelRating="4.2"
            hotelReviewCount="(1,941 reviews)"
            hotelRoomPrice="$S 198"
          />
          <ResultsContainer
            hotelRoomDescription="/unsplashs6ch7n3eoqy2@2x.png"
            hotelRoomType="1 King, City view"
            hotelName="The Westin Bonave..."
            hotelRating="4.1"
            hotelReviewCount="(1,002 reviews)"
            hotelRoomPrice="$S 286"
          />
          <ResultsContainer
            hotelRoomDescription="/unsplashs6ch7n3eoqy3@2x.png"
            hotelRoomType="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            hotelRating="4.7"
            hotelReviewCount="(1,136 reviews)"
            hotelRoomPrice="$S 286"
          />
          <iframe
            className={styles.mobileMap}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className={styles.desktopMap}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          title="LA Map"
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;
