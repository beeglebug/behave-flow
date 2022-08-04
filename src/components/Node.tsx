import { PropsWithChildren, useState } from "react";

type NodeProps = {
  title: string;
};

const randomItem = (items: any[]) =>
  items[Math.floor(Math.random() * items.length)];

const colors = {
  red: ["bg-orange-700", "border-orange-700", "text-white"],
  yellow: ["bg-amber-600", "border-amber-600", "text-white"],
  green: ["bg-green-600", "border-green-600", "text-white"],
  pink: ["bg-pink-500", "border-pink-500", "text-white"],
  gray: ["bg-gray-500", "border-gray-500", "text-white"],
};

export default function Node({
  title,
  children,
}: PropsWithChildren<NodeProps>) {
  const [color] = useState(() => randomItem(Object.values(colors)));
  const [backgroundColor, borderColor, textColor] = color;
  return (
    <div
      className={`border ${borderColor} text-white text-sm bg-gray-800 min-w-[150px]`}
    >
      <div className={`${backgroundColor} ${textColor} px-2 py-1`}>{title}</div>
      <div>{children}</div>
    </div>
  );
}
