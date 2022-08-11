import { FC } from "react";
import { useOnPressKey } from "../hooks/useOnPressKey";

export type HelpModalProps = {
  open?: boolean;
  onClose: () => void;
};

export const HelpModal: FC<HelpModalProps> = ({ open = false, onClose }) => {
  useOnPressKey("Escape", onClose);

  if (open === false) return null;

  return (
    <>
      <div
        className="z-[19] fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        onClick={onClose}
      ></div>
      <div className="z-20 relative top-20 mx-auto p-2 border w-96 shadow-lg bg-white text-sm">
        <h2 className="mb-2 text-lg">Help</h2>
        <p className="mb-2">Right click anywhere to add a new node.</p>
        <p className="mb-2">
          Drag a connection into empty space to add a new node and connect it to
          the source.
        </p>
        <p className="mb-2">
          Click and drag on a socket to connect to another socket of the same
          type.
        </p>
        <p className="mb-5">
          Left click to select nodes or connections, backspace to delete
          selected nodes or connections.
        </p>
        <div className="flex">
          <button
            className="bg-teal-400 text-white p-2 w-full cursor-pointer hover:bg-teal-500"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
