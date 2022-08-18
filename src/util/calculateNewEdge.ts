import { NodeSpecJSON } from "behave-graph";
import rawSpecJson from "behave-graph/dist/node-spec.json";
import { v4 as uuidv4 } from "uuid";
import { Node, OnConnectStartParams } from "react-flow-renderer/nocss";
import { getSocketsByNodeTypeAndHandleType } from "./getSocketsByNodeTypeAndHandleType";

const specJSON = rawSpecJson as NodeSpecJSON[];

export const calculateNewEdge = (
  originNode: Node,
  destinationNodeType: string,
  destinationNodeId: string,
  connection: OnConnectStartParams
) => {
  const sockets = getSocketsByNodeTypeAndHandleType(
    specJSON,
    originNode.type,
    connection.handleType
  );
  const originSocket = sockets?.find(
    (socket) => socket.name === connection.handleId
  );

  const newSockets = getSocketsByNodeTypeAndHandleType(
    specJSON,
    destinationNodeType,
    connection.handleType === "source" ? "target" : "source"
  );
  const newSocket = newSockets?.find(
    (socket) => socket.valueType === originSocket?.valueType
  );

  if (connection.handleType === "source") {
    return {
      id: uuidv4(),
      source: connection.nodeId ?? "",
      sourceHandle: connection.handleId,
      target: destinationNodeId,
      targetHandle: newSocket?.name,
    };
  }

  return {
    id: uuidv4(),
    target: connection.nodeId ?? "",
    targetHandle: connection.handleId,
    source: destinationNodeId,
    sourceHandle: newSocket?.name,
  };
};
