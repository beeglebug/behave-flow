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
  valueType: "flow" | "string" | "number" | "boolean";
  defaultValue?: string | number | boolean;
};

export type OutputSocketSpecJSON = {
  name: string;
  valueType: "flow" | "string" | "number" | "boolean";
};

export type NodeSpecJSON = {
  type: string;
  category: NodeCategory;
  inputs: InputSocketSpecJSON[];
  outputs: OutputSocketSpecJSON[];
};
