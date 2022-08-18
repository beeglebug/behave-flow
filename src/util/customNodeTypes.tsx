import { NodeTypes } from "react-flow-renderer/nocss";
import { NodeSpecJSON } from "behave-graph";
import specJson from "behave-graph/dist/node-spec.json";
import { Node } from "../components/Node";

const spec = specJson as NodeSpecJSON[];

export const customNodeTypes = spec.reduce((nodes, node) => {
  nodes[node.type] = (props) => <Node spec={node} {...props} />;
  return nodes;
}, {} as NodeTypes);
