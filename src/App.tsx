import { MouseEvent as ReactMouseEvent, useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  OnConnectStartParams,
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
import { GraphJSON, NodeSpecJSON } from "behave-graph";
import rawSpecJson from "behave-graph/node-spec.json";
import { flowToBehave } from "./transformers/flowToBehave";
import CustomEdge from "./components/CustomEdge";
import NodePicker, { NodePickerFilters } from "./components/NodePicker";

const specJSON = rawSpecJson as NodeSpecJSON[];
const graphJSON = rawGraphJSON as GraphJSON;

const [initialNodes, initialEdges] = behaveToFlow(graphJSON);

const edgeTypes = {
  default: CustomEdge,
};

function Flow() {
  const [nodePickerVisibility, setNodePickerVisibility] =
    useState<XYPosition>();
  const [lastConnectStartParams, setLastConnectStartParams] =
    useState<OnConnectStartParams>();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // TODO useCallback on everything

  const getSocketsByNodeTypeAndHandleType = (
    nodeType: string | undefined,
    handleType: "source" | "target" | null
  ) => {
    const spec = specJSON.find((item) => item.type === nodeType);
    if (spec === undefined) return;
    return handleType === "source" ? spec?.outputs : spec?.inputs;
  };

  const getPickerFilters = (
    params: OnConnectStartParams | undefined
  ): NodePickerFilters | undefined => {
    if (params === undefined) return;

    const originNode = nodes.find((node) => node.id === params.nodeId);
    if (originNode === undefined) return;

    const sockets = getSocketsByNodeTypeAndHandleType(
      originNode.type,
      params.handleType
    );
    const socket = sockets?.find((socket) => socket.name === params.handleId);

    if (socket === undefined) return;

    return {
      handleType: params.handleType === "source" ? "target" : "source",
      valueType: socket.valueType,
    };
  };

  const handleAddNode = (nodeType: string, position: XYPosition) => {
    const newNode = {
      id: uuidv4(),
      type: nodeType,
      position,
      data: {},
    };
    onNodesChange([
      {
        type: "add",
        item: newNode,
      },
    ]);
    if (lastConnectStartParams !== undefined) {
      const originNode = nodes.find(
        (node) => node.id === lastConnectStartParams.nodeId
      );
      if (originNode) {
        const sockets = getSocketsByNodeTypeAndHandleType(
          originNode.type,
          lastConnectStartParams.handleType
        );
        const originSocket = sockets?.find(
          (socket) => socket.name === lastConnectStartParams.handleId
        );

        const newSockets = getSocketsByNodeTypeAndHandleType(
          nodeType,
          lastConnectStartParams.handleType === "source" ? "target" : "source"
        );
        const newSocket = newSockets?.find(
          (socket) => socket.valueType === originSocket?.valueType
        );

        console.log("going from", originSocket, "to", newSocket, newSockets);

        // const socket = sockets?.find(
        //   (socket) => socket.valueType === lastConnectStartParams.
        // );
        let newEdge: Edge;
        if (lastConnectStartParams.handleType === "source") {
          newEdge = {
            id: uuidv4(),
            source: lastConnectStartParams.nodeId ?? "",
            sourceHandle: lastConnectStartParams.handleId,
            target: newNode.id,
            targetHandle: newSocket?.name,
          };
        } else {
          newEdge = {
            id: uuidv4(),
            target: lastConnectStartParams.nodeId ?? "",
            targetHandle: lastConnectStartParams.handleId,
            source: newNode.id,
            sourceHandle: newSocket?.name,
          };
        }
        // console.log(newEdge);
        onEdgesChange([
          {
            type: "add",
            item: newEdge,
          },
        ]);
      }
    }
    closeNodePicker();
  };

  const handleStartConnect = (
    e: ReactMouseEvent,
    params: OnConnectStartParams
  ) => {
    setLastConnectStartParams(params);
  };

  const handleStopConnect = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains("react-flow__pane")) {
      setNodePickerVisibility({ x: e.clientX, y: e.clientY });
    }
  };

  const handleRun = () => {
    const graph = flowToBehave(nodes, edges);
    exec(graph);
  };

  const closeNodePicker = () => {
    setLastConnectStartParams(undefined);
    setNodePickerVisibility(undefined);
  };

  const handlePaneClick = () => closeNodePicker();

  const handlePaneContextMenu = (e: ReactMouseEvent) => {
    e.preventDefault();
    setNodePickerVisibility({ x: e.clientX, y: e.clientY });
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
      onConnectStart={handleStartConnect}
      onConnectStop={handleStopConnect}
      fitView
      fitViewOptions={{ maxZoom: 1 }}
      onPaneClick={handlePaneClick}
      onPaneContextMenu={handlePaneContextMenu}
    >
      <Controls />
      <Background
        variant={BackgroundVariant.Lines}
        color="#353639"
        style={{ backgroundColor: "#1E1F22" }}
      />
      <BehaveControls onRun={handleRun} />
      {nodePickerVisibility && (
        <NodePicker
          position={nodePickerVisibility}
          filters={getPickerFilters(lastConnectStartParams)}
          onPickNode={handleAddNode}
          onClose={closeNodePicker}
        />
      )}
    </ReactFlow>
  );
}

export default Flow;
