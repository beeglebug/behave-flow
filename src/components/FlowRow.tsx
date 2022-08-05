import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { Row } from "./Row";

export type FlowRowProps = { target?: boolean; source?: boolean };

export default function FlowRow({ target, source }: FlowRowProps) {
  return (
    <Row align="center">
      {target && (
        <div className="flex w-full justify-start">
          <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
          <Handle id="flow" type="target" position={Position.Left} />
        </div>
      )}
      {source && (
        <div className="flex w-full justify-end">
          <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
          <Handle id="flow" type="source" position={Position.Right} />
        </div>
      )}
    </Row>
  );
}
