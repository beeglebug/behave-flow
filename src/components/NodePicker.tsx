import { useState } from "react";
import { useReactFlow, XYPosition } from "react-flow-renderer";
import { useOnPressKey } from "../hooks/useOnPressKey";
import rawSpecJson from "behave-graph/node-spec.json";
import { NodeSpecJSON } from "behave-graph";

const specJSON = rawSpecJson as NodeSpecJSON[];

const nodes = specJSON;

export type NodePickerFilters = {
  handleType: "source" | "target";
  valueType: string;
};

type NodePickerProps = {
  position: XYPosition;
  filters?: NodePickerFilters;
  onPickNode: (type: string, position: XYPosition) => void;
  onClose: () => void;
};

const NodePicker = ({
  position,
  onPickNode,
  onClose,
  filters,
}: NodePickerProps) => {
  const [search, setSearch] = useState("");
  const instance = useReactFlow();

  useOnPressKey("Escape", onClose);

  let filtered = nodes;
  if (filters !== undefined) {
    filtered = filtered.filter((node) => {
      const sockets =
        filters?.handleType === "source" ? node.outputs : node.inputs;
      return sockets.some((socket) => socket.valueType === filters?.valueType);
    });
  }

  filtered = filtered.filter((node) => {
    const term = search.toLowerCase();
    return node.type.toLowerCase().includes(term);
  });

  return (
    <div
      className="absolute bg-white z-10 text-sm"
      style={{ top: position.y, left: position.x }}
    >
      <input
        type="text"
        autoFocus
        className="border w-full p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="max-h-48 overflow-y-scroll">
        {filtered.map(({ type }) => (
          <div
            key={type}
            className="p-2 cursor-pointer border-b"
            onClick={() => onPickNode(type, instance.project(position))}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodePicker;
