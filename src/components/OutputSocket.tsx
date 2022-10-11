import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Connection,
  Handle,
  Position,
  useReactFlow,
} from "react-flow-renderer/nocss";
import cx from "classnames";
import { colors, valueTypeColorMap } from "../util/colors";
import { OutputSocketSpecJSON } from "behave-graph";
import { isValidConnection } from "../util/isValidConnection";

export type OutputSocketProps = {
  connected: boolean;
} & OutputSocketSpecJSON;

export default function OutputSocket({
  connected,
  valueType,
  name,
}: OutputSocketProps) {
  const instance = useReactFlow();
  const isFlowSocket = valueType === "flow";
  const colorName = valueTypeColorMap[valueType];
  const [backgroundColor, borderColor] = colors[colorName];

  return (
    <div className="flex grow items-center justify-end h-7">
      {isFlowSocket && (
        <FontAwesomeIcon icon={faCaretRight} color="#ffffff" size="lg" />
      )}
      {isFlowSocket === false && <div className="capitalize">{name}</div>}
      <Handle
        id={name}
        type="source"
        position={Position.Right}
        className={cx(borderColor, connected ? backgroundColor : "bg-gray-800")}
        isValidConnection={(connection: Connection) =>
          isValidConnection(connection, instance)
        }
      />
    </div>
  );
}
