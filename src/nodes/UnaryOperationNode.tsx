import { NodeProps, useEdges } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { NodeCategory } from "../types";
import { isHandleConnected } from "../util/isHandleConnected";

type Props = NodeProps & { title: string; category: NodeCategory };

export default function UnaryOperationNode({
  id,
  title,
  data,
  category,
}: Props) {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  return (
    <Node title={title} category={category}>
      <InputRow
        value={data.a}
        connected={isHandleConnected(edges, id, "a")}
        onChange={(value) => handleChange("a", value)}
        handleType="target"
        handleId="a"
      />
      <TextRow label="Result" handleType="source" handleId="result" />
    </Node>
  );
}
