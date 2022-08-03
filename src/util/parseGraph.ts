import { GraphJSON } from "behave-graph";
import { Edge, Node } from "react-flow-renderer";

function camelize(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/*
{
  type: "event/start",
},
{
  type: "action/log",
  inputs: {
    flow: { links: [{ node: 0, socket: "flow" }] },
    text: { value: "Hello World!" },
  },
}
*/

export const parseGraph = (graph: GraphJSON): [Node[], Edge[]] => {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  let x = 0;

  graph.forEach((nodeJSON, ix) => {
    const node = {
      id: String(ix),
      type: camelize(nodeJSON.type.replace("/", " ")),
      position: { x, y: 0 },
      data: {},
    };

    nodes.push(node);

    if (nodeJSON.inputs) {
      for (const input of Object.values(nodeJSON.inputs)) {
        if (input.links !== undefined) {
          input.links.forEach((link) => {
            const source = String(link.node);
            const target = String(ix);
            const id = `e${source}-${target}`;
            const sourceHandle = link.socket;
            edges.push({ id, source, sourceHandle, target });
          });
        }
        if (input.value !== undefined) {
          node.data = input;
        }
      }
    }

    // TODO better auto positioning
    x += 250;
  });

  return [nodes, edges];
};
