import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Flex: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <div {...props} className={clsx("flex items-center", className)}>
      {children}
    </div>
  );
};
