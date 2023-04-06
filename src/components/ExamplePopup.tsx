import { FunctionComponent } from "react";
import styles from "./ExamplePopup.module.css";

type ExamplePopupType = {
  onClose?: () => void;
};

const ExamplePopup: FunctionComponent<ExamplePopupType> = ({ onClose }) => {
  return (
    <div className={styles.examplePopup}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
        title="Matterhorn"
      />
    </div>
  );
};

export default ExamplePopup;
