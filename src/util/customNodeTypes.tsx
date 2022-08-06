import { NodeTypes } from "react-flow-renderer";
import { NodeSpecJSON } from "../types";
import { Node } from "../components/Node";
import specJson from "behave-graph/node-spec.json";

const spec = specJson as NodeSpecJSON[];

export const customNodeTypes = spec.reduce((nodes, node) => {
  nodes[node.type] = (props) => <Node spec={node} {...props} />;
  return nodes;
}, {} as NodeTypes);
