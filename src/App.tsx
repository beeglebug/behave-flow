import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  EdgeChange,
  NodeChange,
} from "react-flow-renderer";
import { behaveToFlow } from "./transformers/behaveToFlow";
import { customNodeTypes } from "./util/customNodeTypes";
import BehaveControls from "./components/BehaveControls";
import { exec } from "./util/exec";
import rawGraphJSON from "./graph.json";
import { GraphJSON } from "behave-graph";
import { flowToBehave } from "./transformers/flowToBehave";

const graphJSON = rawGraphJSON as GraphJSON;

const [initialNodes, initialEdges] = behaveToFlow(graphJSON);

const output = flowToBehave(initialNodes, initialEdges);

console.log(graphJSON, output, initialNodes, initialEdges);

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
      // TODO update the behave graph
    },
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
      // TODO update the behave graph
    },
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const handleAddNode = (nodeType: string) => {
    const nextId = Math.random().toString();
    onNodesChange([
      {
        type: "add",
        item: {
          id: nextId,
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
