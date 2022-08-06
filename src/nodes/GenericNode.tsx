import { NodeProps, useEdges } from "react-flow-renderer";
import InputSocket from "../components/InputSocket";
import Node from "../components/Node";
import OutputSocket from "../components/OutputSocket";
import { useChangeNodeData } from "../hooks/useChangeNodeData";
import { NodeSpec } from "../types";
import { isHandleConnected } from "../util/isHandleConnected";

type GenericNodeProps = NodeProps & {
  spec: NodeSpec;
};

export default function GenericNode({ id, data, spec }: GenericNodeProps) {
  const edges = useEdges();
  const handleChange = useChangeNodeData(id);
  return (
    <Node title={spec.type} category={spec.category}>
      <div className="flex flex-row justify-between">
        <div>
          {spec.inputs.map((socket) => (
            <InputSocket
              key={socket.name}
              {...socket}
              onChange={handleChange}
              connected={isHandleConnected(edges, id, socket.name)}
            />
          ))}
        </div>
        <div>
          {spec.outputs.map((socket) => (
            <OutputSocket
              key={socket.name}
              {...socket}
              connected={isHandleConnected(edges, id, socket.name)}
            />
          ))}
        </div>
      </div>
    </Node>
  );
}
