import { ReactNode } from "react";
import cx from "classnames";

type RowProps = { children?: ReactNode; align?: "left" | "right" };

export const Row = ({ children, align = "left" }: RowProps) => (
  <div
    className={cx(
      "flex relative p-2 items-center",
      align === "left" ? "justify-start" : "justify-end"
    )}
  >
    {children}
  </div>
);
