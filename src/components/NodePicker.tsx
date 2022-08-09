import { useState } from "react";
import { useReactFlow, XYPosition } from "react-flow-renderer";
import { customNodeTypes } from "../util/customNodeTypes";

const nodes = Object.keys(customNodeTypes).map((type) => {
  const [category, name] = type.split("/");
  return { category, name, type };
});

type NodePickerProps = {
  position: XYPosition;
  onPickNode: (type: string, position: XYPosition) => void;
};

const NodePicker = ({ position, onPickNode }: NodePickerProps) => {
  const [search, setSearch] = useState("");
  const instance = useReactFlow();
  const filtered = nodes.filter((node) => {
    const term = search.toLowerCase();
    return node.name.toLowerCase().includes(term);
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
        {filtered.map(({ type, name }) => (
          <div
            key={name}
            className="p-2 cursor-pointer border-b"
            onClick={() => onPickNode(type, instance.project(position))}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodePicker;
