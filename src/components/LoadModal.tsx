import { GraphJSON } from "behave-graph";
import { FC, useState } from "react";
import { useReactFlow } from "react-flow-renderer/nocss";
import { behaveToFlow } from "../transformers/behaveToFlow";
import { autoLayout } from "../util/autoLayout";
import { hasPositionMetaData } from "../util/hasPositionMetaData";
import { Modal } from "./Modal";

import Branch from "behave-graph/dist/examples/basics/Branch.json";
import Delay from "behave-graph/dist/examples/basics/Delay.json";
import HelloWorld from "behave-graph/dist/examples/basics/HelloWorld.json";
import Math from "behave-graph/dist/examples/basics/Math.json";
import State from "behave-graph/dist/examples/basics/State.json";

const examples = {
  branch: Branch,
  delay: Delay,
  helloWorld: HelloWorld,
  math: Math,
  state: State,
} as Record<string, GraphJSON>;

export type LoadModalProps = {
  open?: boolean;
  onClose: () => void;
};

export const LoadModal: FC<LoadModalProps> = ({ open = false, onClose }) => {
  const [value, setValue] = useState<string>();
  const [selected, setSelected] = useState("");

  const instance = useReactFlow();

  const handleLoad = () => {
    let graph;
    if (value !== undefined) {
      graph = JSON.parse(value) as GraphJSON;
    } else if (selected !== "") {
      graph = examples[selected];
    }

    if (graph === undefined) return;

    const [nodes, edges] = behaveToFlow(graph);

    if (hasPositionMetaData(graph) === false) {
      autoLayout(nodes, edges);
    }

    instance.setNodes(nodes);
    instance.setEdges(edges);

    // TODO better way to call fit vew after edges render
    setTimeout(() => {
      instance.fitView();
    }, 100);

    handleClose();
  };

  const handleClose = () => {
    setValue(undefined);
    setSelected("");
    onClose();
  };

  return (
    <Modal
      title="Load Graph"
      actions={[
        { label: "Cancel", onClick: handleClose },
        { label: "Load", onClick: handleLoad },
      ]}
      open={open}
      onClose={onClose}
    >
      <textarea
        autoFocus
        className="border border-gray-300 w-full p-2 h-32 align-top"
        placeholder="Paste JSON here"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      ></textarea>
      <div className="p-4 text-center text-gray-800">or</div>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-3"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        <option disabled value="">
          Select an example
        </option>
        <option value="branch">Branch</option>
        <option value="delay">Delay</option>
        <option value="helloWorld">Hello World</option>
        <option value="math">Math</option>
        <option value="state">State</option>
      </select>
    </Modal>
  );
};
