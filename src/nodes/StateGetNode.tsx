import { NodeProps } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";
import { useChangeNodeData } from "../hooks/useChangeNodeData";

export default function StateGetNode({ id, data }: NodeProps) {
  const handleChange = useChangeNodeData(id);
  return (
    <Node title="State / Get">
      <InputRow
        label="ID"
        value={data.identifier}
        handleId="identifier"
        onChange={(value) => handleChange("identifier", value)}
      />
      <InputRow
        label="Default"
        value={data.defaultValue}
        handleId="result"
        onChange={(value) => handleChange("result", value)}
      />
      <TextRow label="Result" handleType="source" handleId="result" />
    </Node>
  );
}
