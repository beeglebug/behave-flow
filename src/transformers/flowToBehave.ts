import { GraphJSON, NodeJSON } from "behave-graph";
import { Edge, Node } from "react-flow-renderer";

export const flowToBehave = (nodes: Node[], edges: Edge[]): GraphJSON => {
  const graph: GraphJSON = [];

  nodes.forEach((node) => {
    if (node.type === undefined) {
      return;
    }

    const behaveNode: NodeJSON = {
      type: node.type,
    };

    Object.entries(node.data).forEach(([key, value]) => {
      if (behaveNode.inputs === undefined) {
        behaveNode.inputs = {};
      }
      behaveNode.inputs[key] = { value: value as string | number | boolean };
    });

    edges
      .filter((edge) => edge.target === node.id)
      .forEach((edge) => {
        if (behaveNode.inputs === undefined) {
          behaveNode.inputs = {};
        }
        if (edge.targetHandle === undefined || edge.targetHandle === null) {
          return;
        }
        if (edge.sourceHandle === undefined || edge.sourceHandle === null) {
          return;
        }
        behaveNode.inputs[edge.targetHandle] = {
          // TODO this will not work with edited graphs
          links: [{ node: Number(edge.source), socket: edge.sourceHandle }],
        };
      });

    graph.push(behaveNode);
  });

  return graph;
};
