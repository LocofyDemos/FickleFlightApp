import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./TripMenuItemContainer.module.css";

type TripMenuItemContainerType = {
  attractionId?: string;
  commuteId?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const TripMenuItemContainer: FunctionComponent<TripMenuItemContainerType> = ({
  attractionId,
  commuteId,
  propBackgroundColor,
}) => {
  const iconStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={styles.tripMenuItem}>
      <div className={styles.icon} style={iconStyle}>
        <img className={styles.iconVector} alt="" src={attractionId} />
      </div>
      <div className={styles.text}>{commuteId}</div>
    </button>
  );
};

export default TripMenuItemContainer;
