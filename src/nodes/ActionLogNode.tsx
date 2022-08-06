import { NodeProps, useEdges } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { NodeCategory } from "../types";
import { isHandleConnected } from "../util/isHandleConnected";

export default function ActionLogNode({ id, data }: NodeProps) {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  return (
    <Node title="Log" category={NodeCategory.Action}>
      <FlowRow
        target
        source
        targetConnected={isHandleConnected(edges, id, "flow")}
      />
      <InputRow
        label="Text"
        value={data.text}
        connected={isHandleConnected(edges, id, "text")}
        handleId="text"
        onChange={(value) => handleChange("text", value)}
      />
    </Node>
  );
}
