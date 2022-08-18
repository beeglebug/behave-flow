import { NodeSpecJSON } from "behave-graph";
import { PropsWithChildren } from "react";

import { categoryColorMap, colors } from "../util/colors";

type NodeProps = {
  title: string;
  category?: NodeSpecJSON["category"];
};

export default function NodeContainer({
  title,
  category = "None",
  children,
}: PropsWithChildren<NodeProps>) {
  const colorName = categoryColorMap[category];
  const [backgroundColor, borderColor, textColor] = colors[colorName];
  return (
    <div
      className={`node-container rounded text-white text-sm bg-gray-800 min-w-[120px]`}
    >
      <div className={`${backgroundColor} ${textColor} px-2 py-1 rounded-t`}>
        {title}
      </div>
      <div
        className={`flex flex-col gap-2 py-2 border-l border-r border-b ${borderColor}`}
      >
        {children}
      </div>
    </div>
  );
}
