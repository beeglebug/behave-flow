// TODO get all these from behave-graph once merged

export type NodeCategory =
  | "Action"
  | "Query"
  | "Logic"
  | "Event"
  | "State"
  | "Flow"
  | "Time"
  | "None";

export type InputSocketSpecJSON = {
  name: string;
  valueType: string;
  defaultValue?: string;
};

export type OutputSocketSpecJSON = {
  name: string;
  valueType: string;
};

export type NodeSpecJSON = {
  type: string;
  category: NodeCategory;
  inputs: InputSocketSpecJSON[];
  outputs: OutputSocketSpecJSON[];
};
