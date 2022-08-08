import { PropsWithChildren } from "react";
import { NodeCategory } from "../types";
import { categoryColorMap, colors } from "../util/colors";

type NodeProps = {
  title: string;
  category?: NodeCategory;
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
      className={`node-container border ${borderColor} rounded text-white text-sm bg-gray-800 min-w-[120px]`}
    >
      <div className={`${backgroundColor} ${textColor} px-2 py-1`}>{title}</div>
      <div>{children}</div>
    </div>
  );
}
