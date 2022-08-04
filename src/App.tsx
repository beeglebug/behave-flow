import { GraphJSON } from "behave-graph";
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
import { parseGraph } from "./util/parseGraph";
import { customNodeTypes } from "./util/customNodeTypes";
import BehaveControls from "./components/BehaveControls";

const graphJSON: GraphJSON = [
  {
    type: "event/start",
  },
  {
    type: "logic/numberConstant",
    inputs: {
      a: { value: 3 },
    },
  },
  {
    type: "logic/numberPow",
    inputs: {
      a: { links: [{ node: 1, socket: "result" }] },
      b: { value: 1 },
    },
  },
  {
    type: "logic/numberPow",
    inputs: {
      a: { links: [{ node: 1, socket: "result" }] },
      b: { value: 2 },
    },
  },
  {
    type: "logic/numberPow",
    inputs: {
      a: { links: [{ node: 1, socket: "result" }] },
      b: { value: 3 },
    },
  },
  {
    type: "logic/numberMultiply",
    inputs: {
      a: { links: [{ node: 2, socket: "result" }] },
      b: { value: 3 },
    },
  },
  {
    type: "logic/numberAdd",
    inputs: {
      a: { links: [{ node: 5, socket: "result" }] },
      b: { links: [{ node: 3, socket: "result" }] },
    },
  },
  {
    type: "logic/numberNegate",
    inputs: {
      a: { links: [{ node: 4, socket: "result" }] },
      b: { value: 10 },
    },
  },
  {
    type: "logic/numberAdd",
    inputs: {
      a: { links: [{ node: 6, socket: "result" }] },
      b: { links: [{ node: 7, socket: "result" }] },
    },
  },
  {
    type: "logic/numberToString",
    inputs: {
      a: { links: [{ node: 8, socket: "result" }] },
    },
  },
  {
    type: "action/log",
    inputs: {
      flow: { links: [{ node: 0, socket: "flow" }] },
      text: { links: [{ node: 9, socket: "result" }] },
    },
  },
];

const [initialNodes, initialEdges] = parseGraph(graphJSON);

console.log(initialNodes, initialEdges);

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

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
      <BehaveControls />
    </ReactFlow>
  );
}

export default Flow;
