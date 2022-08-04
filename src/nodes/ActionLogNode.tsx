import { NodeProps, useEdges } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import { isHandleConnected } from "../util/isHandleConnected";

export default function ActionLogNode({ id, data }: NodeProps) {
  const edges = useEdges();
  return (
    <Node title="Action / Log">
      <FlowRow type="target" />
      <InputRow
        label="Text"
        value={data.text}
        disabled={isHandleConnected(edges, id, "text")}
        handleId="text"
      />
    </Node>
  );
}
