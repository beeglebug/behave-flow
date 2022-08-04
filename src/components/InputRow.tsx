import { Handle, Position } from "react-flow-renderer";
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
      {label && <label className="mr-2">{label}</label>}
      <input
        type="text"
        disabled={disabled}
        className=" bg-gray-600 disabled:bg-gray-700  py-1 px-2"
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
