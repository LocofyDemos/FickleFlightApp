import { FunctionComponent, useCallback } from "react";
import SearchFormContainer from "./SearchFormContainer";
import styles from "./SearchContainer.module.css";

const SearchContainer: FunctionComponent = () => {
  const onSearchButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchSection}>
        <div className={styles.title}>
          <div className={styles.whereAreYou}>Where are you off to?</div>
        </div>
        <SearchFormContainer
          productIds="/radiobuttonunchecked.svg"
          productIdsArray="/radiobuttonchecked.svg"
          onSearchButtonClick={onSearchButtonClick}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
