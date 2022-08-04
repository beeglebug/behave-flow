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
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
