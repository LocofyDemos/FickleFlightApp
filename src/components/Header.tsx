import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Header.module.css";

type HeaderType = {
  /** Style props */
  searchColor?: Property.Color;
  hotelsColor?: Property.Color;
  offersColor?: Property.Color;

  /** Action props */
  onHotelsClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = ({
  searchColor,
  hotelsColor,
  offersColor,
  onHotelsClick,
}) => {
  const exploreStyle: CSS.Properties = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const searchStyle: CSS.Properties = useMemo(() => {
    return {
      color: hotelsColor,
    };
  }, [hotelsColor]);

  const hotelsStyle: CSS.Properties = useMemo(() => {
    return {
      color: offersColor,
    };
  }, [offersColor]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <img
          className={styles.fickleflightIcon}
          alt=""
          src="/fickleflight.svg"
        />
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <div className={styles.explore} style={exploreStyle}>
              Explore
            </div>
            <div className={styles.explore} style={searchStyle}>
              Search
            </div>
            <button
              className={styles.hotels}
              onClick={onHotelsClick}
              style={hotelsStyle}
            >
              Hotels
            </button>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.avatarIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
