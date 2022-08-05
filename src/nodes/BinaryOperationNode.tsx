import { NodeProps, useEdges } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { NodeCategory } from "../types";
import { isHandleConnected } from "../util/isHandleConnected";

type Props = NodeProps & { title: string; category: NodeCategory };

export default function BinaryOperationNode({
  id,
  data,
  title,
  category,
}: Props) {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  return (
    <Node title={title} category={category}>
      <InputRow
        label="A"
        value={data.a}
        onChange={(value) => handleChange("a", value)}
        connected={isHandleConnected(edges, id, "a")}
        handleId="a"
      />
      <InputRow
        label="B"
        value={data.b}
        onChange={(value) => handleChange("b", value)}
        connected={isHandleConnected(edges, id, "b")}
        handleId="b"
      />
      <TextRow label="Result" handleId="result" handleType="source" />
    </Node>
  );
}
