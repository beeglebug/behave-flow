import { Handle, Position } from "react-flow-renderer";
import { Row } from "./Row";

export type TextRowProps = {
  label?: string;
  handleType: "source" | "target";
  handleId: string;
};

export default function TextRow({ label, handleType, handleId }: TextRowProps) {
  return (
    <Row align={handleType === "target" ? "left" : "right"}>
      {label}
      <Handle
        id={handleId}
        type={handleType}
        position={handleType === "target" ? Position.Left : Position.Right}
      />
    </Row>
  );
}
