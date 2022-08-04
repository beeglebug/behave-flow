import { NodeProps } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";

export default function StateSetNode({ data }: NodeProps) {
  return (
    <Node title="State / Set">
      <FlowRow target />
      <FlowRow source />
      <InputRow label="ID" value={data.identifier} handleId="identifier" />
      <InputRow label="Value" value={data.value} handleId="result" />
    </Node>
  );
}
