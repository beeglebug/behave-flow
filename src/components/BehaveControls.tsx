import { FC, useState } from "react";
import { customNodeTypes } from "../util/customNodeTypes";
import { LoadModal } from "./LoadModal";
import { SaveModal } from "./SaveModal";

export type BehaveControlsProps = {
  onRun: () => void;
  onAdd: (nodeType: string) => void;
};

const nodes = Object.keys(customNodeTypes).map((key) => key);

const BehaveControls: FC<BehaveControlsProps> = ({ onRun, onAdd }) => {
  const [nodeType, setNodeType] = useState(nodes[0]);
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  return (
    <>
      <div className="absolute top-4 right-4 bg-white p-2 z-10 text-sm">
        <div className="mb-2">
          <select
            className="border border-gray-300 p-2 w-full"
            value={nodeType}
            onChange={(e) => setNodeType(e.currentTarget.value)}
          >
            {nodes.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
        <button
          className="mb-2 bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
          onClick={() => onAdd(nodeType)}
        >
          Add Node
        </button>
        <div className="flex">
          <button
            className="mb-2 mr-2 bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
            onClick={() => setLoadModalOpen(true)}
          >
            Load
          </button>
          <button
            className="mb-2 bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
            onClick={() => setSaveModalOpen(true)}
          >
            Save
          </button>
        </div>
        <button
          className="bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
          onClick={onRun}
        >
          Run
        </button>
      </div>
      <LoadModal open={loadModalOpen} onClose={() => setLoadModalOpen(false)} />
      <SaveModal open={saveModalOpen} onClose={() => setSaveModalOpen(false)} />
    </>
  );
};

export default BehaveControls;
