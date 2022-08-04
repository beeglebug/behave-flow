import { NodeTypes } from "react-flow-renderer";
import ActionLogNode from "../nodes/ActionLogNode";
import BinaryOperationNode from "../nodes/BinaryOperationNode";
import EventStartNode from "../nodes/EventStartNode";
import FlowBranchNode from "../nodes/FlowBranchNode";
import SingleInputNode from "../nodes/SingleInputNode";
import StateSetNode from "../nodes/StateSetNode";
import StateGetNode from "../nodes/StateGetNode";

import UnaryOperationNode from "../nodes/UnaryOperationNode";

export const customNodeTypes: NodeTypes = {
  actionLog: ActionLogNode,
  eventStart: EventStartNode,
  flowBranch: FlowBranchNode,
  logicNumberToString: (props) => (
    <UnaryOperationNode title="Logic / Number To String" {...props} />
  ),
  stateSetNumber: StateSetNode,
  stateGetNumber: StateGetNode,
  logicNumberConstant: (props) => (
    <SingleInputNode title="Logic / Number Constant" {...props} />
  ),
  logicNumberAdd: (props) => (
    <BinaryOperationNode title="Logic / Number Add" {...props} />
  ),
  logicNumberMultiply: (props) => (
    <BinaryOperationNode title="Logic / Number Multiply" {...props} />
  ),
  logicNumberPow: (props) => (
    <BinaryOperationNode title="Logic / Number Pow" {...props} />
  ),
  logicNumberNegate: (props) => (
    <UnaryOperationNode title="Logic / Number Negate" {...props} />
  ),
};
