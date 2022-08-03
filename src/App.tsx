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
import ActionLogNode from "./nodes/ActionLogNode";
import EventStartNode from "./nodes/EventStartNode";
import FlowBranchNode from "./nodes/FlowBranchNode";
import { parseGraph } from "./util/parseGraph";

const nodeTypes = {
  eventStart: EventStartNode,
  actionLog: ActionLogNode,
  flowBranch: FlowBranchNode,
};

const behaviourGraphJson: GraphJSON = [
  {
    type: "event/start",
  },
  {
    type: "flow/branch",
    inputs: {
      flow: { links: [{ node: 0, socket: "flow" }] },
      condition: { value: false },
    },
  },
  {
    type: "action/log",
    inputs: {
      flow: { links: [{ node: 1, socket: "true" }] },
      text: { value: "Condition is true!" },
    },
  },
  {
    type: "action/log",
    inputs: {
      flow: { links: [{ node: 1, socket: "false" }] },
      text: { value: "Condition is false!" },
    },
  },
];

const [initialNodes, initialEdges] = parseGraph(behaviourGraphJson);
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
      nodeTypes={nodeTypes}
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
    </ReactFlow>
  );
}

export default Flow;
