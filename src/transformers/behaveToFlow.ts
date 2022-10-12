import { GraphJSON, Link } from "behave-graph";
import { Edge, Node } from "react-flow-renderer/nocss";
import { v4 as uuidv4 } from "uuid";
import { getNodeSpecJSON } from "../util/nodeSpec";

export const behaveToFlow = (graph: GraphJSON): [Node[], Edge[]] => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  graph.nodes?.forEach((nodeJSON) => {
    const node: Node = {
      id: nodeJSON.id,
      type: nodeJSON.type,
      position: {
        x: nodeJSON.metadata?.positionX
          ? Number(nodeJSON.metadata?.positionX)
          : 0,
        y: nodeJSON.metadata?.positionY
          ? Number(nodeJSON.metadata?.positionY)
          : 0,
      },
      data: {} as { [key: string]: any },
    };

    nodes.push(node);

    if (nodeJSON.parameters) {
      for (const [inputKey, input] of Object.entries(nodeJSON.parameters)) {
        if ("link" in input) {
          edges.push({
            id: uuidv4(),
            source: input.link.nodeId,
            sourceHandle: input.link.socket,
            target: nodeJSON.id,
            targetHandle: inputKey,
          });
        } else if ("value" in input) {
          node.data[inputKey] = input.value;
        }
      }
    }
    if (nodeJSON.flows) {
      for (const [inputKey, link] of Object.entries(nodeJSON.flows)) {
        edges.push({
          id: uuidv4(),
          source: nodeJSON.id,
          sourceHandle: inputKey,
          target: link.nodeId,
          targetHandle: link.socket,
        });
      }
    }
  });

  return [nodes, edges];
};
