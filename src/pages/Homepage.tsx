import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ExploreContainer from "../components/ExploreContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHotelsClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  const onSearchButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <Header
        searchColor="#1262af"
        hotelsColor="#424242"
        offersColor="#424242"
        onHotelsClick={onHotelsClick}
      />
      <ExploreContainer />
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <WeeklyUpdatesContainer />
    </div>
  );
};

export default Homepage;
