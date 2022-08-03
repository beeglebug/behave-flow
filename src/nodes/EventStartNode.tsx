import { Handle, NodeProps, Position } from "react-flow-renderer";
import ButtonRow from "../components/ButtonRow";
import Node from "../components/Node";

export default function EventStartNode({ data }: NodeProps) {
  return (
    <Node title="Event / Start">
      <div>
        <ButtonRow>Start</ButtonRow>
      </div>
      <Handle type="source" position={Position.Right} style={{ top: 41 }} />
    </Node>
  );
}
