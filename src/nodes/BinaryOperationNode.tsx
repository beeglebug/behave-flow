import { NodeProps, useEdges } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";
import { isHandleConnected } from "../util/isHandleConnected";

type Props = NodeProps & { title: string };

export default function BinaryOperationNode({ id, data, title }: Props) {
  const edges = useEdges();

  return (
    <Node title={title}>
      <InputRow
        label="A"
        value={data.a}
        disabled={isHandleConnected(edges, id, "a")}
        handleId="a"
      />
      <InputRow
        label="B"
        value={data.b}
        disabled={isHandleConnected(edges, id, "b")}
        handleId="b"
      />
      <TextRow label="Result" handleId="result" handleType="source" />
    </Node>
  );
}
