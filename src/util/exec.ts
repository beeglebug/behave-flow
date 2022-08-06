import {
  GraphEvaluator,
  GraphJSON,
  GraphRegistry,
  readGraphFromJSON,
  registerGenericNodes,
} from "behave-graph";

const registry = new GraphRegistry();

registerGenericNodes(registry.nodes);

export const exec = async (graphJson: GraphJSON) => {
  const graph = readGraphFromJSON(graphJson, registry);
  const evaluator = new GraphEvaluator(graph);
  evaluator.triggerEvents("event/start");
  return await evaluator.executeAllAsync();
};
