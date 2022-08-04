import { Edge } from "react-flow-renderer";

export const isHandleConnected = (
  edges: Edge[],
  nodeId: string,
  handleId: string
) => {
  return edges.some(
    (edge) => edge.target === nodeId && edge.targetHandle === handleId
  );
};
