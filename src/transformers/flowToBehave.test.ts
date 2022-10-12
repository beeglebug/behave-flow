import { flowToBehave } from "./flowToBehave";
import { GraphJSON } from "behave-graph";
import { behaveToFlow } from "./behaveToFlow";

import * as delayJson from "behave-graph/src/graphs/core/async/Delay.json";
import * as customEventJson from "behave-graph/src/graphs/core/events/CustomEvents.json";
import * as lifecycleJson from "behave-graph/src/graphs/core/events/Lifecycle.json";
import * as branchJson from "behave-graph/src/graphs/core/flow/Branch.json";
import * as flipFlopJson from "behave-graph/src/graphs/core/flow/FlipFlop.json";
import * as forLoopJson from "behave-graph/src/graphs/core/flow/ForLoop.json";
import * as performanceTestJson from "behave-graph/src/graphs/core/flow/PerformanceTest.json";
import * as sequenceJson from "behave-graph/src/graphs/core/flow/Sequence.json";
import * as helloWorldJson from "behave-graph/src/graphs/core/HelloWorld.json";
import * as polynomialJson from "behave-graph/src/graphs/core/logic/Polynomial.json";
import * as changedJson from "behave-graph/src/graphs/core/variables/Changed.json";
import * as frameCounterJson from "behave-graph/src/graphs/core/variables/FrameCounter.json";
import * as initialValueJson from "behave-graph/src/graphs/core/variables/InitialValue.json";
import * as setGetJson from "behave-graph/src/graphs/core/variables/SetGet.json";

const exampleMap: { [key: string]: any } = {
  branchJson,
  delayJson,
  flipFlopJson,
  forLoopJson,
  sequenceJson,
  helloWorldJson,
  setGetJson,
  polynomialJson,
  customEventJson,
  lifecycleJson,
  changedJson,
  frameCounterJson,
  initialValueJson,
  performanceTestJson,
};

for (const key in exampleMap) {
  const flowGraph = exampleMap[key] as any;

  const [nodes, edges] = behaveToFlow(flowGraph.default as GraphJSON);

  it(`transforms from flow to behave: ${key}`, () => {
    console.log("flowGraphJSON", flowGraph);
    const output = flowToBehave(nodes, edges);
    console.log("outputJSON", output);
    // TODO: missing "customEvents" and "variables"
    expect(output).toEqual(flowGraph.default);
  });
}
