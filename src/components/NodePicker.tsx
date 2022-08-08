import { useState } from "react";
import { customNodeTypes } from "../util/customNodeTypes";

const nodes = Object.keys(customNodeTypes).map((node) => {
  const [type, name] = node.split("/");
  return { type, name };
});

const NodePicker = () => {
  const [search, setSearch] = useState("");
  const filtered = nodes.filter((node) => node.name.includes(search));
  const grouped = filtered.reduce((groups, node) => {
    return groups;
  }, {});
  return (
    <div
      className="absolute bg-white z-10 text-sm"
      style={{ top: 100, left: 100 }}
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
          <div key={name} className="p-2">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NodePicker;
