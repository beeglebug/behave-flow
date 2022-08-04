import { NodeProps } from "react-flow-renderer";
import Node from "../components/Node";
import TextRow from "../components/TextRow";

type Props = NodeProps & { title: string };

export default function UnaryOperationNode({ title }: Props) {
  return (
    <Node title={title}>
      <TextRow label="A" handleType="target" handleId="a" />
      <TextRow label="Result" handleType="source" handleId="result" />
    </Node>
  );
}
