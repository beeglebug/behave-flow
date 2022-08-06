import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { InputSocket as Socket } from "../types";

export type InputSocketProps = {
  connected: boolean;
  onChange: (key: string, value: any) => void;
} & Socket;

export default function InputSocket({
  connected,
  valueType,
  onChange,
  name,
  defaultValue,
}: InputSocketProps) {
  return (
    <div className="flex w-full items-center relative pl-2 h-7 my-2">
      <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      <Handle id={name} type="target" position={Position.Left} />
    </div>
  );
}
