import { Handle, NodeProps, Position } from "react-flow-renderer";
import Input from "../components/Input";
import Node from "../components/Node";

export default function ActionLogNode({ data }: NodeProps) {
  return (
    <Node title="Action / Log">
      <Handle type="target" position={Position.Left} style={{ top: 41 }} />
      <div>
        <Input label="Value" value={data.value} />
      </div>
    </Node>
  );
}
