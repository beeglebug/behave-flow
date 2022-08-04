import {
  GraphEvaluator,
  GraphJSON,
  GraphTypeRegistry,
  readGraphFromJSON,
  registerGenericNodes,
} from "behave-graph";

const registry = new GraphTypeRegistry();

registerGenericNodes(registry);

export const exec = async (graphJson: GraphJSON) => {
  const graph = readGraphFromJSON(graphJson, registry);
  const evaluator = new GraphEvaluator(graph);

  evaluator.triggerEvents("event/start");

  return await evaluator.executeAllAsync();
};
