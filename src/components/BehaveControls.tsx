import { FC } from "react";
import { faCaretRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customNodeTypes } from "../util/customNodeTypes";

export type BehaveControlsProps = { onRun: () => void };

const nodes = Object.keys(customNodeTypes).map((key) => key);

const BehaveControls: FC<BehaveControlsProps> = ({ onRun }) => {
  return (
    <div className="absolute top-4 right-4 bg-white p-2 z-10 text-sm">
      <div className="mb-2">
        <select className="border p-2">
          {nodes.map((name) => (
            <option>{name}</option>
          ))}
        </select>
      </div>
      <div className="mb-2">
        <button
          className="bg-neutral-400 text-white p-2 w-full cursor-pointer hover:bg-neutral-500"
          onClick={onRun}
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
