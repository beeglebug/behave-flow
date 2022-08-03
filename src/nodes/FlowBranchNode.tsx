import { Handle, NodeProps, Position } from "react-flow-renderer";
import Input from "../components/Input";
import Node from "../components/Node";
import TextRow from "../components/TextRow";

export default function FlowBranchNode({ data }: NodeProps) {
  return (
    <Node title="Flow / Branch">
      <Input label="Value" value={data.value} />
      <TextRow>true</TextRow>
      <TextRow>false</TextRow>
      <Handle
        id="condition"
        type="target"
        position={Position.Left}
        style={{ top: 41 }}
      />
      <Handle
        id="true"
        type="source"
        position={Position.Right}
        style={{ top: 81 }}
      />
      <Handle
        id="false"
        type="source"
        position={Position.Right}
        style={{ top: 121 }}
      />
    </Node>
  );
}
