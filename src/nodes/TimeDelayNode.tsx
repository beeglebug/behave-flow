import { NodeProps, useEdges } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { isHandleConnected } from "../util/isHandleConnected";

export default function TimeDelayNode({ id, data }: NodeProps) {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  return (
    <Node title="Delay">
      <FlowRow source target />
      <InputRow
        label="Duration"
        connected={isHandleConnected(edges, id, "duration")}
        value={data.duration}
        handleId="duration"
        onChange={(value) => handleChange(id, value)}
      />
    </Node>
  );
}
