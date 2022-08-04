import { NodeProps } from "react-flow-renderer";
import FlowRow from "../components/FlowRow";
import InputRow from "../components/InputRow";
import Node from "../components/Node";

export default function TimeDelayNode({ data }: NodeProps) {
  return (
    <Node title="Time / Delay">
      <FlowRow source target />
      <InputRow label="Duration" value={data.duration} handleId="duration" />
    </Node>
  );
}
