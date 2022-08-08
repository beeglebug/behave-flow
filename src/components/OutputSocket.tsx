import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Connection, Handle, Position } from "react-flow-renderer";
import cx from "classnames";
import { OutputSocketSpecJSON } from "../types";
import { colors, valueTypeColorMap } from "../util/colors";

export type OutputSocketProps = {
  connected: boolean;
} & OutputSocketSpecJSON;

export default function OutputSocket({
  connected,
  valueType,
  name,
}: OutputSocketProps) {
  const showFlowIcon = valueType === "flow";
  const colorName = valueTypeColorMap[valueType];
  const [backgroundColor, borderColor] = colors[colorName];

  return (
    <div className="flex grow items-center justify-end h-7">
      {showFlowIcon && (
        <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      )}
      {showFlowIcon === false && <div className="capitalize">{name}</div>}
      <Handle
        id={name}
        type="source"
        position={Position.Right}
        className={cx(borderColor, connected ? backgroundColor : "bg-gray-800")}
        isValidConnection={(connection: Connection) => {
          return true;
        }}
      />
    </div>
  );
}
