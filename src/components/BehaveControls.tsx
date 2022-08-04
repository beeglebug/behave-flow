import { FC, useState } from "react";
import { customNodeTypes } from "../util/customNodeTypes";

export type BehaveControlsProps = {
  onRun: () => void;
  onAdd: (nodeType: string) => void;
};

const nodes = Object.keys(customNodeTypes).map((key) => key);

const BehaveControls: FC<BehaveControlsProps> = ({ onRun, onAdd }) => {
  const [nodeType, setNodeType] = useState(nodes[0]);
  return (
    <div className="absolute top-4 right-4 bg-white p-2 z-10 text-sm">
      <div className="mb-2">
        <select
          className="border p-2"
          value={nodeType}
          onChange={(e) => setNodeType(e.currentTarget.value)}
        >
          {nodes.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <button
          className="bg-neutral-400 text-white p-2 w-full cursor-pointer hover:bg-neutral-500"
          onClick={() => onAdd(nodeType)}
        >
          Add Node
        </button>
      </div>
      <div>
        <button
          className="bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
          onClick={onRun}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default BehaveControls;
