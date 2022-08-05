import { NodeProps } from "react-flow-renderer";
import Node from "../components/Node";
import TextRow from "../components/TextRow";
import { NodeCategory } from "../types";

type Props = NodeProps & { title: string; category: NodeCategory };

export default function UnaryOperationNode({ title, category }: Props) {
  return (
    <Node title={title} category={category}>
      <TextRow label="A" handleType="target" handleId="a" />
      <TextRow label="Result" handleType="source" handleId="result" />
    </Node>
  );
}
