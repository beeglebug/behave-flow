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

export const customNodeTypes: NodeTypes = {
  "action/log": ActionLogNode,
  "event/start": EventStartNode,
  "flow/branch": FlowBranchNode,
  "time/delay": TimeDelayNode,
  "logic/numberToString": (props) => (
    <UnaryOperationNode title="Logic / Number To String" {...props} />
  ),
  "state/setNumber": StateSetNode,
  "state/getNumber": StateGetNode,
  "logic/numberConstant": (props) => (
    <SingleInputNode title="Logic / Number Constant" {...props} />
  ),
  "logic/numberAdd": (props) => (
    <BinaryOperationNode title="Logic / Number Add" {...props} />
  ),
  "logic/numberMultiply": (props) => (
    <BinaryOperationNode title="Logic / Number Multiply" {...props} />
  ),
  "logic/numberPow": (props) => (
    <BinaryOperationNode title="Logic / Number Pow" {...props} />
  ),
  "logic/numberNegate": (props) => (
    <UnaryOperationNode title="Logic / Number Negate" {...props} />
  ),
};
