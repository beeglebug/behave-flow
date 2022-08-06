import { NodeProps } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import { useChangeNodeData } from "../hooks/useChangeNodeData";

export default function StateSetNode({ id, data }: NodeProps) {
  const handleChange = useChangeNodeData(id);
  return (
    <Node title="State / Set">
      <FlowRow target source />
      <InputRow
        label="ID"
        value={data.identifier}
        handleId="identifier"
        onChange={(value) => handleChange("identifier", value)}
      />
      <InputRow
        label="Value"
        value={data.value}
        handleId="result"
        onChange={(value) => handleChange("value", value)}
      />
    </Node>
  );
}
