import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const onHotelsClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  const onSearchButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className={styles.resultsPage}>
      <Header
        searchColor="#424242"
        hotelsColor="#1262af"
        offersColor="#424242"
        onHotelsClick={onHotelsClick}
      />
      <SearchContainer />
      <div className={styles.searchResults}>
        <SearchFilterContainer />
        <div className={styles.resultsSection}>
          <FlightCardsContainer />
          <div className={styles.recentlyBooked}>
            <div className={styles.recentlyBookedTitle}>
              <b className={styles.results}>Recently booked</b>
              <img
                className={styles.recentlyBookedTitleChild}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.bookingCards}>
              <BookingContainer
                flightDetails="/icon.svg"
                airlineDetails="Singapore Airlines"
                flightPrice="$1128"
                originAirportCode="SIN"
                destinationAirportCode="Singapore"
                originCity="LAX"
                destinationCity="Los Angeles"
                classType="Economy"
                numberOfAdults="2 Adults"
                bookingDate="Booked on "
                bookingPlatform="Expedia"
                timeSinceBooking="1s ago!"
              />
              <BookingContainer
                flightDetails="/icon1.svg"
                airlineDetails="American Airlines"
                flightPrice="$1024"
                originAirportCode="SFO"
                destinationAirportCode="San Francisco"
                originCity="SIN"
                destinationCity="Singapore"
                classType="First Class"
                numberOfAdults="1 Adults"
                bookingDate="Booked on"
                bookingPlatform="Kayak"
                timeSinceBooking="2s ago!"
              />
              <BookingContainer
                flightDetails="/icon2.svg"
                airlineDetails="Japan Airlines"
                flightPrice="$2996"
                originAirportCode="PHX"
                destinationAirportCode="Phoenix"
                originCity="DXB"
                destinationCity="Dubai"
                classType="Economy"
                numberOfAdults="3 Adults"
                bookingDate="Booked on "
                bookingPlatform="Skyscanner"
                timeSinceBooking="3s ago!"
              />
              <div className={styles.showMore}>
                <div className={styles.showMore1}>Show more</div>
                <img className={styles.downIcon} alt="" src="/down-icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
