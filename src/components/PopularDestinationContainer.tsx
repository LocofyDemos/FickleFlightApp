import { FunctionComponent } from "react";
import styles from "./PopularDestinationContainer.module.css";

type PopularDestinationContainerType = {
  destinationName?: string;
  destinationPrice?: string;
  destinationImageId?: string;
};

const PopularDestinationContainer: FunctionComponent<
  PopularDestinationContainerType
> = ({ destinationName, destinationPrice, destinationImageId }) => {
  return (
    <button className={styles.popularDestinationCard}>
      <div className={styles.pariscard}>
        <img className={styles.cardimageIcon} alt="" src={destinationName} />
        <div className={styles.destinationDetails}>
          <b className={styles.destination}>{destinationPrice}</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price}>{destinationImageId}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PopularDestinationContainer;
