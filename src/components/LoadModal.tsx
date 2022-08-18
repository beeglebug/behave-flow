import { GraphJSON } from "behave-graph";
import { FC, useState } from "react";
import { useReactFlow } from "react-flow-renderer/nocss";
import { behaveToFlow } from "../transformers/behaveToFlow";
import { autoLayout } from "../util/autoLayout";
import { hasPositionMetaData } from "../util/hasPositionMetaData";
import { Modal } from "./Modal";

export type LoadModalProps = {
  open?: boolean;
  onClose: () => void;
};

export const LoadModal: FC<LoadModalProps> = ({ open = false, onClose }) => {
  const [value, setValue] = useState<string>();
  const instance = useReactFlow();

  const handleLoad = () => {
    if (value === undefined) return;
    const graph = JSON.parse(value) as GraphJSON;
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
    onClose();
  };

  return (
    <Modal
      title="Load Graph"
      actions={[
        { label: "Cancel", onClick: onClose },
        { label: "Load", onClick: handleLoad },
      ]}
      open={open}
      onClose={onClose}
    >
      <textarea
        autoFocus
        className="border border-gray-300 w-full p-2 h-32"
        placeholder="Paste JSON here"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      ></textarea>
    </Modal>
  );
};
