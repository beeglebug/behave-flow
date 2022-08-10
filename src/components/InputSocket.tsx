import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Connection, Handle, Position } from "react-flow-renderer/nocss";
import cx from "classnames";
import { colors, valueTypeColorMap } from "../util/colors";
import { InputSocketSpecJSON } from "behave-graph";

export type InputSocketProps = {
  connected: boolean;
  value: any | undefined;
  onChange: (key: string, value: any) => void;
} & InputSocketSpecJSON;

export default function InputSocket({
  connected,
  value,
  onChange,
  name,
  valueType,
  defaultValue,
}: InputSocketProps) {
  const showFlowIcon = valueType === "flow";
  const colorName = valueTypeColorMap[valueType];
  const [backgroundColor, borderColor] = colors[colorName];
  return (
    <div className="flex grow items-center justify-start h-7">
      {showFlowIcon && (
        <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      )}
      {showFlowIcon === false && (
        <>
          <div className="capitalize mr-2">{name}</div>
          {connected === false && (
            <>
              {valueType === "string" && (
                <input
                  type="text"
                  className=" bg-gray-600 disabled:bg-gray-700 w-16 py-1 px-2"
                  value={String(value) ?? defaultValue ?? ""}
                  onChange={(e) => onChange(name, e.target.value)}
                />
              )}
              {valueType === "number" && (
                <input
                  type="number"
                  className=" bg-gray-600 disabled:bg-gray-700 w-16 py-1 px-2"
                  value={String(value) ?? defaultValue ?? ""}
                  onChange={(e) => onChange(name, e.target.value)}
                />
              )}
              {valueType === "boolean" && (
                <input
                  type="checkbox"
                  className=" bg-gray-600 disabled:bg-gray-700 w-16 py-1 px-2"
                  value={String(value) ?? defaultValue ?? ""}
                  onChange={(e) => onChange(name, e.target.value)}
                />
              )}
            </>
          )}
        </>
      )}
      <Handle
        id={name}
        type="target"
        position={Position.Left}
        className={cx(borderColor, connected ? backgroundColor : "bg-gray-800")}
        isValidConnection={(connection: Connection) => {
          return true;
        }}
      />
    </div>
  );
}
