import { FunctionComponent, useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import CSS, { Property } from "csstype";
import styles from "./BookingOptionsCard.module.css";

type BookingOptionsCardType = {
  stopOptionsText?: string;

  /** Style props */
  propGap?: Property.Gap;
};

const BookingOptionsCard: FunctionComponent<BookingOptionsCardType> = ({
  stopOptionsText,
  propGap,
}) => {
  const stopsOptionsStyle: CSS.Properties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={styles.stopsSection}>
      <b className={styles.sectionTitle}>{stopOptionsText}</b>
      <div className={styles.stopsOptions} style={stopsOptionsStyle}>
        <FormControlLabel
          label="1 Stop"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          label="2 Stops"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
    </div>
  );
};

export default BookingOptionsCard;
