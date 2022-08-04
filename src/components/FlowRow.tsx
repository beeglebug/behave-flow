import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { Row } from "./Row";

export type FlowRowProps = { target?: boolean; source?: boolean };

export default function FlowRow({ target, source }: FlowRowProps) {
  return (
    <Row align="center">
      {target && <Handle id="flow" type="target" position={Position.Left} />}
      {source && <Handle id="flow" type="source" position={Position.Right} />}
      <FontAwesomeIcon icon={faArrowRight} color="#ffffff" size="lg" />
    </Row>
  );
}
