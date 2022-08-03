import styles from "./TextRow.module.css";

export type TextRowProps = { children: string };

export default function TextRow({ children }: TextRowProps) {
  return <div className={styles.row}>{children}</div>;
}
