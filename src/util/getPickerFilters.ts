import { Node, OnConnectStartParams } from "reactflow";
import { NodeSpecJSON } from "behave-graph";
import rawSpecJson from "behave-graph/dist/node-spec.json";
import { NodePickerFilters } from "../components/NodePicker";
import { getSocketsByNodeTypeAndHandleType } from "./getSocketsByNodeTypeAndHandleType";

const specJSON = rawSpecJson as NodeSpecJSON[];

export const getNodePickerFilters = (
  nodes: Node[],
  params: OnConnectStartParams | undefined
): NodePickerFilters | undefined => {
  if (params === undefined) return;

  const originNode = nodes.find((node) => node.id === params.nodeId);
  if (originNode === undefined) return;

  const sockets = getSocketsByNodeTypeAndHandleType(
    specJSON,
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
