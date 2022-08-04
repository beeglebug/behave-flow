import { ReactNode } from "react";
import cx from "classnames";

type RowProps = { children?: ReactNode; align?: "left" | "right" | "center" };

export const Row = ({ children, align = "left" }: RowProps) => (
  <div
    className={cx(
      "flex relative p-2 items-center",
      align === "left" && "justify-start",
      align === "right" && "justify-end",
      align === "center" && "justify-center"
    )}
  >
    {children}
  </div>
);
