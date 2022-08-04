import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { Row } from "./Row";

export type FlowRowProps = { type: "source" | "target" };

export default function FlowRow({ type }: FlowRowProps) {
  return (
    <Row align={type === "target" ? "left" : "right"}>
      <Handle
        id="flow"
        type={type}
        position={type === "target" ? Position.Left : Position.Right}
      />
      <FontAwesomeIcon icon={faArrowRight} color="#ffffff" size="lg" />
    </Row>
  );
}
