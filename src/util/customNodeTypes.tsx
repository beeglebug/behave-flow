import { NodeTypes } from "react-flow-renderer/nocss";
//import { NodeSpecJSON } from "behave-graph";
//import specJson from "behave-graph/dist/node-spec.json";
import { Node } from "../components/Node";
import { getNodeSpecJSON } from "./nodeSpec";

const specJSON = getNodeSpecJSON(); //const spec = specJson as NodeSpecJSON[];

export const customNodeTypes = specJSON.reduce((nodes, node) => {
  nodes[node.type] = (props) => <Node spec={node} {...props} />;
  return nodes;
}, {} as NodeTypes);
