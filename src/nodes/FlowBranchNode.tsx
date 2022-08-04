import { NodeProps } from "react-flow-renderer";
import BooleanRow from "../components/BooleanRow";
import FlowRow from "../components/FlowRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";

export default function FlowBranchNode({
  data,
}: NodeProps<{ condition: boolean }>) {
  return (
    <Node title="Flow / Branch">
      <FlowRow target />
      <BooleanRow
        label="Condition"
        value={data.condition}
        handleId="condition"
      />
      <TextRow label="true" handleId="true" handleType="source" />
      <TextRow label="false" handleId="false" handleType="source" />
    </Node>
  );
}
