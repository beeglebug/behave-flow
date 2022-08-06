import { NodeProps } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import Node from "../components/Node";
import { NodeCategory } from "../types";

export default function EventStartNode({ data }: NodeProps) {
  return (
    <Node title="Start" category={"Event"}>
      <FlowRow source />
    </Node>
  );
}
