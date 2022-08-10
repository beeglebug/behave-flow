import { GraphJSON } from "behave-graph";
import { Edge, Node } from "react-flow-renderer/nocss";
import { v4 as uuidv4 } from "uuid";

export const behaveToFlow = (graph: GraphJSON): [Node[], Edge[]] => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  graph.nodes.forEach((nodeJSON) => {
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

    if (nodeJSON.inputs) {
      for (const [inputKey, input] of Object.entries(nodeJSON.inputs)) {
        if (input.links !== undefined) {
          input.links.forEach((link) => {
            edges.push({
              id: uuidv4(),
              source: link.nodeId,
              sourceHandle: link.socket,
              target: nodeJSON.id,
              targetHandle: inputKey,
            });
          });
        }
        if (input.value !== undefined) {
          node.data[inputKey] = input.value;
        }
      }
    }
  });

  return [nodes, edges];
};
