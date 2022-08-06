import { NodeTypes } from "react-flow-renderer";
import ActionLogNode from "../nodes/ActionLogNode";
import BinaryOperationNode from "../nodes/BinaryOperationNode";
import EventStartNode from "../nodes/EventStartNode";
import FlowBranchNode from "../nodes/FlowBranchNode";
import SingleInputNode from "../nodes/SingleInputNode";
import StateSetNode from "../nodes/StateSetNode";
import StateGetNode from "../nodes/StateGetNode";

import UnaryOperationNode from "../nodes/UnaryOperationNode";
import TimeDelayNode from "../nodes/TimeDelayNode";
import { NodeCategory, NodeSpec } from "../types";
import GenericNode from "../nodes/GenericNode";

import specRaw from "../spec.json";

const spec = specRaw as unknown as NodeSpec[];

export const customNodeTypes: NodeTypes = {
  "action/log": (props) => <GenericNode spec={spec[0]} {...props} />,
  "event/start": (props) => <GenericNode spec={spec[1]} {...props} />,
  "flow/branch": FlowBranchNode,
  "time/delay": TimeDelayNode,
  "logic/numberToString": (props) => (
    <UnaryOperationNode
      title="Number To String"
      category={"Logic"}
      {...props}
    />
  ),
  "state/setNumber": StateSetNode,
  "state/getNumber": StateGetNode,
  "logic/numberConstant": (props) => (
    <SingleInputNode
      title="Number Constant"
      inputType="number"
      category={"Logic"}
      {...props}
    />
  ),
  "logic/stringConcat": (props) => (
    <BinaryOperationNode title="String Concat" category={"Logic"} {...props} />
  ),
  "logic/numberAdd": (props) => (
    <BinaryOperationNode
      title="Logic / Number Add"
      category={"Logic"}
      {...props}
    />
  ),
  "logic/numberMultiply": (props) => (
    <BinaryOperationNode
      title="Logic / Number Multiply"
      category={"Logic"}
      {...props}
    />
  ),
  "logic/numberPow": (props) => (
    <BinaryOperationNode
      title="Logic / Number Pow"
      category={"Logic"}
      {...props}
    />
  ),
  "logic/numberNegate": (props) => (
    <UnaryOperationNode title="Negate" category={"Logic"} {...props} />
  ),
};
