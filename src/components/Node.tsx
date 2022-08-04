import { PropsWithChildren } from "react";

type NodeProps = {
  title: string;
};

export default function Node({
  title,
  children,
}: PropsWithChildren<NodeProps>) {
  return (
    <div className="border border-orange-700 text-white text-sm bg-gray-800 min-w-[150px]">
      <div className="bg-orange-700 px-2 py-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}
