import { GraphEvaluator } from "behave-graph";
import { useState } from "react";
import { useBehaveGraph } from "../hooks/useBehaveGraph";
import { ClearModal } from "./ClearModal";
import { HelpModal } from "./HelpModal";
import {
  faDownload,
  faPlay,
  faQuestion,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LoadModal } from "./LoadModal";
import { SaveModal } from "./SaveModal";

const Controls = () => {
  const [loadModalOpen, setLoadModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [clearModalOpen, setClearModalOpen] = useState(false);

  const graph = useBehaveGraph();

  const handleRun = () => {
    if (graph === undefined) return;
    const evaluator = new GraphEvaluator(graph);
    evaluator.triggerEvents("event/start");
    evaluator.executeAllAsync();
  };

  return (
    <>
      <div className="absolute top-4 right-4 bg-white z-10 text-sm flex">
        <div
          className="cursor-pointer border-r bg-white hover:bg-gray-100"
          title="Help"
          onClick={() => setHelpModalOpen(true)}
        >
          <FontAwesomeIcon
            icon={faQuestion}
            className="w-3 p-2 text-gray-700 align-middle"
          />
        </div>
        <div
          className="cursor-pointer border-r bg-white hover:bg-gray-100"
          title="Load"
          onClick={() => setLoadModalOpen(true)}
        >
          <FontAwesomeIcon
            icon={faUpload}
            className="w-3 p-2 text-gray-700 align-middle"
          />
        </div>
        <div
          className="cursor-pointer border-r bg-white hover:bg-gray-100"
          title="Save"
          onClick={() => setSaveModalOpen(true)}
        >
          <FontAwesomeIcon
            icon={faDownload}
            className="w-3 p-2 text-gray-700 align-middle"
          />
        </div>
        <div
          className="cursor-pointer border-r bg-white hover:bg-gray-100"
          title="Clear"
          onClick={() => setClearModalOpen(true)}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className="w-3 p-2 text-gray-700 align-middle"
          />
        </div>
        <div
          className="cursor-pointer border-r bg-white hover:bg-gray-100"
          title="Run"
          onClick={() => handleRun()}
        >
          <FontAwesomeIcon
            icon={faPlay}
            className="w-3 p-2 text-gray-700 align-middle"
          />
        </div>
      </div>
      <LoadModal open={loadModalOpen} onClose={() => setLoadModalOpen(false)} />
      <SaveModal open={saveModalOpen} onClose={() => setSaveModalOpen(false)} />
      <HelpModal open={helpModalOpen} onClose={() => setHelpModalOpen(false)} />
      <ClearModal
        open={clearModalOpen}
        onClose={() => setClearModalOpen(false)}
      />
    </>
  );
};

export default Controls;
