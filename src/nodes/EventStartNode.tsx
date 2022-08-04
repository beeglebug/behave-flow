import { NodeProps } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import Node from "../components/Node";

export default function EventStartNode({ data }: NodeProps) {
  return (
    <Node title="Event / Start">
      <FlowRow type="source" />
    </Node>
  );
}
