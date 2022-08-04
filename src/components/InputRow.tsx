import { Handle, Position } from "react-flow-renderer";
import styles from "./InputRow.module.css";
import { Row } from "./Row";

type InputRowProps = {
  value: string;
  label?: string;
  disabled?: boolean;
  handleType?: "source" | "target";
  handleId: string;
};

export default function InputRow({
  value,
  label,
  handleId,
  handleType = "target",
  disabled = false,
}: InputRowProps) {
  return (
    <Row>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        disabled={disabled}
        className={styles.input}
        value={value}
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
