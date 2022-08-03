import { HTMLProps } from "react";
import styles from "./ButtonRow.module.css";

export type ButtonRowProps = HTMLProps<HTMLButtonElement>;

export default function ButtonRow({ children }: ButtonRowProps) {
  return (
    <div className={styles.row}>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
