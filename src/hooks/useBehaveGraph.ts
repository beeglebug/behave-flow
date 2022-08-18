import {
  Graph,
  GraphRegistry,
  readGraphFromJSON,
  registerGenericNodes,
} from "behave-graph";
import { useEffect, useState } from "react";
import { useEdges, useNodes } from "react-flow-renderer/nocss";
import { flowToBehave } from "../transformers/flowToBehave";

export const useBehaveGraph = () => {
  const nodes = useNodes();
  const edges = useEdges();

  const [registry] = useState(() => {
    const registry = new GraphRegistry();
    registerGenericNodes(registry.nodes);
    return registry;
  });

  const [graph, setGraph] = useState<Graph>();

  useEffect(() => {
    const graphJson = flowToBehave(nodes, edges);
    const updated = readGraphFromJSON(graphJson, registry);
    setGraph(updated);
  }, [nodes, edges, registry]);

  return graph;
};
