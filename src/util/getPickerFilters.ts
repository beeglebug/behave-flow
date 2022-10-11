import { Node, OnConnectStartParams } from "react-flow-renderer/nocss";
//import { NodeSpecJSON } from "behave-graph";
//import rawSpecJson from "behave-graph/dist/node-spec.json";
import { NodePickerFilters } from "../components/NodePicker";
import { getSocketsByNodeTypeAndHandleType } from "./getSocketsByNodeTypeAndHandleType";
import { getNodeSpecJSON } from "./nodeSpec";

const specJSON = getNodeSpecJSON(); //const spec = specJson as NodeSpecJSON[];

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
