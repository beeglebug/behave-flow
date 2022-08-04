import { FC, useMemo, useRef, useState } from "react";
import { useOnPressKey } from "../hooks/useOnPressKey";
import { useEdges, useNodes } from "react-flow-renderer";
import { flowToBehave } from "../transformers/flowToBehave";

export type SaveModalProps = { open?: boolean; onClose: () => void };

export const SaveModal: FC<SaveModalProps> = ({ open = false, onClose }) => {
  useOnPressKey("Escape", onClose);
  const ref = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  const edges = useEdges();
  const nodes = useNodes();

  const flow = useMemo(() => flowToBehave(nodes, edges), [nodes, edges]);

  if (open === false) return null;

  const jsonString = JSON.stringify(flow, null, 2);

  const handleCopy = () => {
    ref.current?.select();
    document.execCommand("copy");
    ref.current?.blur();
    setCopied(true);
    setInterval(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        onClick={onClose}
      ></div>
      <div className="z-20 relative top-20 mx-auto p-2 border w-96 shadow-lg bg-white text-sm">
        <textarea
          ref={ref}
          className="border border-gray-300 w-full p-2 mb-2 h-32"
          defaultValue={jsonString}
        ></textarea>
        <div className="flex">
          <button
            className="mr-2 bg-gray-400 text-white p-2 w-full cursor-pointer hover:bg-gray-500"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className=" bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
            onClick={handleCopy}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </>
  );
};
