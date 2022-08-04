import { NodeProps } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";

type Props = NodeProps & { title: string };

export default function SingleInputNode({ data, title }: Props) {
  return (
    <Node title={title}>
      <InputRow value={data.a} handleId="result" handleType="source" />
    </Node>
  );
}
