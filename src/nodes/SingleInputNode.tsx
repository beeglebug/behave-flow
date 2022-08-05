import { NodeProps } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { NodeCategory } from "../types";

type Props = NodeProps & {
  title: string;
  category: NodeCategory;
  inputType: "number" | "string";
};

export default function SingleInputNode({
  id,
  data,
  title,
  category,
  inputType,
}: Props) {
  const handleChange = useChangeNodeData(id);
  return (
    <Node title={title} category={category}>
      <InputRow
        value={data.a}
        handleId="result"
        handleType="source"
        type={inputType}
        onChange={(value) => handleChange("a", value)}
      />
    </Node>
  );
}
