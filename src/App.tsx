import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  useEdgesState,
  useNodesState,
  XYPosition,
} from "react-flow-renderer";
import { v4 as uuidv4 } from "uuid";
import { behaveToFlow } from "./transformers/behaveToFlow";
import { customNodeTypes } from "./util/customNodeTypes";
import BehaveControls from "./components/Controls";
import { exec } from "./util/exec";
import rawGraphJSON from "./graph.json";
import { GraphJSON } from "behave-graph";
import { flowToBehave } from "./transformers/flowToBehave";
import CustomEdge from "./components/CustomEdge";
import NodePicker from "./components/NodePicker";

const graphJSON = rawGraphJSON as GraphJSON;

const [initialNodes, initialEdges] = behaveToFlow(graphJSON);

const edgeTypes = {
  default: CustomEdge,
};

function Flow() {
  const [showNodePicker, setShowNodePicker] = useState<XYPosition | null>(null);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleAddNode = (nodeType: string, position: XYPosition) => {
    setShowNodePicker(null);
    onNodesChange([
      {
        type: "add",
        item: {
          id: uuidv4(),
          type: nodeType,
          position,
          data: {},
        },
      },
    ]);
  };

  const handleStopConnect = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("react-flow__pane")) {
      setShowNodePicker({ x: e.clientX, y: e.clientY });
    }
  };

  const handleRun = () => {
    const graph = flowToBehave(nodes, edges);
    exec(graph);
  };

  return (
    <ReactFlow
      nodeTypes={customNodeTypes}
      edgeTypes={edgeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStop={handleStopConnect}
      fitView
      fitViewOptions={{ maxZoom: 1 }}
    >
      <Controls />
      <Background
        variant={BackgroundVariant.Lines}
        color="#353639"
        style={{ backgroundColor: "#1E1F22" }}
      />
      <BehaveControls onRun={handleRun} />
      {showNodePicker && (
        <NodePicker position={showNodePicker} onPickNode={handleAddNode} />
      )}
    </ReactFlow>
  );
}

export default Flow;
