import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import { v4 as uuidv4 } from "uuid";
import { behaveToFlow } from "./transformers/behaveToFlow";
import { customNodeTypes } from "./util/customNodeTypes";
import BehaveControls from "./components/BehaveControls";
import { exec } from "./util/exec";
import rawGraphJSON from "./graph.json";
import { GraphJSON } from "behave-graph";
import { flowToBehave } from "./transformers/flowToBehave";

const graphJSON = rawGraphJSON as GraphJSON;

const [initialNodes, initialEdges] = behaveToFlow(graphJSON);

function Flow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleAddNode = (nodeType: string) => {
    onNodesChange([
      {
        type: "add",
        item: {
          id: uuidv4(),
          type: nodeType,
          position: { x: 0, y: -200 },
          data: {},
        },
      },
    ]);
  };

  const handleRun = () => {
    const graph = flowToBehave(nodes, edges);
    exec(graph);
  };

  return (
    <ReactFlow
      nodeTypes={customNodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      fitViewOptions={{ maxZoom: 1 }}
    >
      <Controls />
      <Background
        variant={BackgroundVariant.Lines}
        color="#353639"
        style={{ backgroundColor: "#1E1F22" }}
      />
      <BehaveControls onRun={handleRun} onAdd={handleAddNode} />
    </ReactFlow>
  );
}

export default Flow;
