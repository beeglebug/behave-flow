import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Handle, Position } from "react-flow-renderer";
import { InputSocketSpecJSON } from "../types";

export type InputSocketProps = {
  connected: boolean;
  value: string | boolean | number | undefined;
  onChange: (key: string, value: any) => void;
} & InputSocketSpecJSON;

export default function InputSocket({
  connected,
  valueType,
  value,
  onChange,
  name,
  defaultValue,
}: InputSocketProps) {
  const showFlowIcon = valueType === "flow";
  return (
    <div className="flex grow items-center justify-start h-7">
      {showFlowIcon && (
        <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      )}
      {showFlowIcon === false && (
        <>
          <div className="capitalize mr-2">{name}</div>
          {connected === false && (
            <input
              type="text"
              size={5}
              className=" bg-gray-600 disabled:bg-gray-700 w-full py-1 px-2"
              value={connected ? "" : String(value) ?? ""}
              onChange={(e) => onChange(name, e.target.value)}
            />
          )}
        </>
      )}

      <Handle id={name} type="target" position={Position.Left} />
    </div>
  );
}
