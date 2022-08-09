import { FC, useState } from "react";
import { LoadModal } from "./LoadModal";
import { SaveModal } from "./SaveModal";

export type ControlsProps = {
  onRun: () => void;
};

const Controls: FC<ControlsProps> = ({ onRun }) => {
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  return (
    <>
      <div className="absolute top-4 right-4 bg-white p-2 z-10 text-sm">
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

export default Controls;
