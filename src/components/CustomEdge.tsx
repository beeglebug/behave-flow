import React from "react";
import { EdgeProps, getBezierPath } from "react-flow-renderer/nocss";

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
}: EdgeProps) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path edge-path-bg"
        d={edgePath}
      />
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
      />
    </>
  );
}
