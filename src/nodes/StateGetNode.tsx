import { NodeProps } from "react-flow-renderer";
import InputRow from "../components/InputRow";
import Node from "../components/Node";
import TextRow from "../components/TextRow";

export default function StateGetNode({ data }: NodeProps) {
  return (
    <Node title="State / Get">
      <InputRow label="ID" value={data.identifier} handleId="identifier" />
      <InputRow label="Default" value={data.defaultValue} handleId="result" />
      <TextRow label="Result" handleType="source" handleId="result" />
    </Node>
  );
}
