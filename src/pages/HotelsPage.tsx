import { FunctionComponent, useCallback } from "react";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  const onHotelsClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className={styles.hotelsPage}>
      <Header onHotelsClick={onHotelsClick} />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <NewsletterContainer />
    </div>
  );
};

export default HotelsPage;
