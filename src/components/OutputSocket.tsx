import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { OutputSocket as Socket } from "../types";

export type OutputSocketProps = {
  connected: boolean;
} & Socket;

export default function OutputSocket({
  connected,
  valueType,
  name,
}: OutputSocketProps) {
  return (
    <div className="flex w-full items-center relative pr-2 h-7 my-2">
      <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      <Handle id="flow" type="source" position={Position.Right} />
    </div>
  );
}
