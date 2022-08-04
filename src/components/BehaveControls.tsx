import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./BehaveControls.module.css";

export type BehaveControlsProps = {};

const BehaveControls: FC<BehaveControlsProps> = ({}) => {
  return (
    <div className={styles.controls}>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faCaretRight} /> Run
      </button>
    </div>
  );
};

export default BehaveControls;
