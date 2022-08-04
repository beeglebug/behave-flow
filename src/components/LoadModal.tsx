import { GraphJSON } from "behave-graph";
import { FC, useState } from "react";
import { useReactFlow } from "react-flow-renderer";
import { useOnPressKey } from "../hooks/useOnPressKey";
import { behaveToFlow } from "../transformers/behaveToFlow";

export type LoadModalProps = {
  open?: boolean;
  onClose: () => void;
};

export const LoadModal: FC<LoadModalProps> = ({ open = false, onClose }) => {
  useOnPressKey("Escape", onClose);
  const [value, setValue] = useState<string>();
  const instance = useReactFlow();

  if (open === false) return null;

  const handleLoad = () => {
    if (value === undefined) return;
    const graph = JSON.parse(value) as GraphJSON;
    const [nodes, edges] = behaveToFlow(graph);
    instance.setNodes(nodes);
    instance.setEdges(edges);
    setValue(undefined);
    onClose();
  };

  return (
    <>
      <div
        className="z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        onClick={onClose}
      ></div>
      <div className="z-20 relative top-20 mx-auto p-2 border w-96 shadow-lg bg-white text-sm">
        <textarea
          className="border border-gray-300 w-full p-2 mb-2 h-32"
          placeholder="Paste JSON here"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        ></textarea>
        <div className="flex">
          <button
            className="mr-2 bg-gray-400 text-white p-2 w-full cursor-pointer hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className=" bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
            onClick={handleLoad}
          >
            Load
          </button>
        </div>
      </div>
    </>
  );
};
