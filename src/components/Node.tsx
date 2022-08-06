import { PropsWithChildren } from "react";
import { NodeCategory } from "../types";

type NodeProps = {
  title: string;
  category?: NodeCategory;
};

const colors: Record<string, [string, string, string]> = {
  red: ["bg-orange-700", "border-orange-700", "text-white"],
  green: ["bg-green-600", "border-green-600", "text-white"],
  purple: ["bg-purple-500", "border-purple-500", "text-white"],
  blue: ["bg-cyan-600", "border-cyan-600", "text-white"],
  gray: ["bg-gray-500", "border-gray-500", "text-white"],
};

const categoryColorMap: Record<NodeCategory, string> = {
  Event: "red",
  Logic: "green",
  State: "purple",
  Query: "purple",
  Action: "blue",
  Flow: "gray",
  Time: "gray",
  None: "gray",
};

export default function Node({
  title,
  category = "None",
  children,
}: PropsWithChildren<NodeProps>) {
  const colorName = categoryColorMap[category];
  const [backgroundColor, borderColor, textColor] = colors[colorName];
  return (
    <div
      className={`border ${borderColor} rounded text-white text-sm bg-gray-800 min-w-[120px]`}
    >
      <div className={`${backgroundColor} ${textColor} px-2 py-1`}>{title}</div>
      <div>{children}</div>
    </div>
  );
}
