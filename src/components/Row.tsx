import { ReactNode } from "react";
import styles from "./Row.module.css";
import cx from "classnames";

type RowProps = { children?: ReactNode; align?: "left" | "right" };

export const Row = ({ children, align = "left" }: RowProps) => (
  <div
    className={cx(styles.row, align === "left" ? styles.left : styles.right)}
  >
    {children}
  </div>
);
