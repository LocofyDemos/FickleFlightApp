import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "./SearchFormContainer";
import styles from "./ExploreContainer.module.css";

const ExploreContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.searchContainer}>
        <div className={styles.title}>
          <div
            className={styles.heroTagline}
          >{`Let’s explore & travel the world`}</div>
          <div className={styles.heroSubtext}>
            Find the best destinations and the most popular stays!
          </div>
        </div>
        <SearchFormContainer
          productIds="/radiobuttonunchecked1.svg"
          productIdsArray="/radiobuttonchecked1.svg"
          onSearchButtonClick={onSearchButtonClick}
        />
      </div>
    </div>
  );
};

export default ExploreContainer;
