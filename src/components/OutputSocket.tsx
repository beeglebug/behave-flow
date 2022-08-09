import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Connection,
  Handle,
  Position,
  // useReactFlow,
} from "react-flow-renderer";
import cx from "classnames";
import { colors, valueTypeColorMap } from "../util/colors";
import { OutputSocketSpecJSON } from "behave-graph";

export type OutputSocketProps = {
  connected: boolean;
} & OutputSocketSpecJSON;

export default function OutputSocket({
  connected,
  valueType,
  name,
}: OutputSocketProps) {
  // const instance = useReactFlow();
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
          // if (
          //   connection.source === null ||
          //   connection.target === null ||
          //   connection.sourceHandle === null ||
          //   connection.targetHandle === null
          // )
          //   return false;
          // const sourceNode = instance.getNode(connection.source);
          // const targetNode = instance.getNode(connection.target);
          // console.log(connection, sourceNode, targetNode);
          return true;
        }}
      />
    </div>
  );
}
