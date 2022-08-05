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
import { NodeCategory } from "../types";

export const customNodeTypes: NodeTypes = {
  "action/log": ActionLogNode,
  "event/start": EventStartNode,
  "flow/branch": FlowBranchNode,
  "time/delay": TimeDelayNode,
  "logic/numberToString": (props) => (
    <UnaryOperationNode
      title="Number To String"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "state/setNumber": StateSetNode,
  "state/getNumber": StateGetNode,
  "logic/numberConstant": (props) => (
    <SingleInputNode
      title="Number Constant"
      inputType="number"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "logic/stringConcat": (props) => (
    <BinaryOperationNode
      title="String Concat"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "logic/numberAdd": (props) => (
    <BinaryOperationNode
      title="Logic / Number Add"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "logic/numberMultiply": (props) => (
    <BinaryOperationNode
      title="Logic / Number Multiply"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "logic/numberPow": (props) => (
    <BinaryOperationNode
      title="Logic / Number Pow"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
  "logic/numberNegate": (props) => (
    <UnaryOperationNode
      title="Negate"
      category={NodeCategory.Logic}
      {...props}
    />
  ),
};
