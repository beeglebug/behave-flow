import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { OutputSocketSpecJSON } from "../types";

export type OutputSocketProps = {
  connected: boolean;
} & OutputSocketSpecJSON;

export default function OutputSocket({
  connected,
  valueType,
  name,
}: OutputSocketProps) {
  const showFlowIcon = valueType === "flow";
  return (
    <div className="flex grow items-center justify-end h-7">
      {showFlowIcon && (
        <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      )}
      {showFlowIcon === false && <div className="capitalize">{name}</div>}
      <Handle id={name} type="source" position={Position.Right} />
    </div>
  );
}
