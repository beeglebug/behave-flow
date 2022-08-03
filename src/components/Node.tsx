import { PropsWithChildren } from "react";
import styles from "./Node.module.css";

type NodeProps = {
  title: string;
};

export default function Node({
  title,
  children,
}: PropsWithChildren<NodeProps>) {
  return (
    <div className={styles.node}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <button type="button" className={styles.close} aria-label="Remove Node">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
