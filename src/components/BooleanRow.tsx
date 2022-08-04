import { Handle, Position } from "react-flow-renderer";
import styles from "./BooleanRow.module.css";
import { Row } from "./Row";

type BooleanRowProps = {
  value: boolean;
  label?: string;
  disabled?: boolean;
  handleType?: "source" | "target";
  handleId: string;
};

export default function BooleanRow({
  value,
  label,
  handleId,
  handleType = "target",
  disabled = false,
}: BooleanRowProps) {
  return (
    <Row>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="checkbox"
        disabled={disabled}
        className={styles.input}
        checked={value}
        onChange={() => {}}
      />
      <Handle
        id={handleId}
        type={handleType}
        position={handleType === "target" ? Position.Left : Position.Right}
      />
    </Row>
  );
}
