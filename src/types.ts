// TODO export from behave-graph

export type NodeCategory =
  | "Action"
  | "Query"
  | "Logic"
  | "Event"
  | "State"
  | "Flow"
  | "Time"
  | "None";

type FlowSocket = { name: string; valueType: "flow"; defaultValue: undefined };

type OutputNumberSocket = {
  name: string;
  valueType: "number";
};
type OutputStringSocket = {
  name: string;
  valueType: "string";
};
type OutputBooleanSocket = {
  name: string;
  valueType: "boolean";
};

type InputNumberSocket = OutputNumberSocket & { defaultValue: number };
type InputStringSocket = OutputStringSocket & { defaultValue: string };
type InputBooleanSocket = OutputBooleanSocket & { defaultValue: boolean };

export type InputSocket =
  | FlowSocket
  | InputNumberSocket
  | InputStringSocket
  | InputBooleanSocket;

export type OutputSocket =
  | FlowSocket
  | OutputNumberSocket
  | OutputStringSocket
  | OutputBooleanSocket;

export type NodeSpec = {
  type: string;
  category: NodeCategory;
  inputs: InputSocket[];
  outputs: OutputSocket[];
};
