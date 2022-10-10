import { GraphJSON, NodeJSON } from "behave-graph";
import { Edge, Node } from "react-flow-renderer/nocss";

const isNullish = (value: any): value is null | undefined =>
  value === undefined || value === null;

export const flowToBehave = (nodes: Node[], edges: Edge[]): GraphJSON => {
  const graph: GraphJSON = { nodes: [], variables: [], customEvents: [] };

  nodes.forEach((node) => {
    if (node.type === undefined) {
      return;
    }

    const behaveNode: NodeJSON = {
      id: node.id,
      type: node.type,
      metadata: {
        positionX: String(node.position.x),
        positionY: String(node.position.y),
      },
    };

    Object.entries(node.data).forEach(([key, value]) => {
      if (behaveNode.inputs === undefined) {
        behaveNode.inputs = {};
      }
      behaveNode.inputs[key] = { value: value as string };
    });

    edges
      .filter((edge) => edge.target === node.id)
      .forEach((edge) => {
        if (behaveNode.inputs === undefined) {
          behaveNode.inputs = {};
        }
        if (isNullish(edge.targetHandle)) return;
        if (isNullish(edge.sourceHandle)) return;

        behaveNode.inputs[edge.targetHandle] = {
          links: [{ nodeId: edge.source, socket: edge.sourceHandle }],
        };
      });

    // TODO filter out any orphan nodes at this point, to avoid errors further down inside behave-graph

    graph.nodes.push(behaveNode);
  });

  return graph;
};
