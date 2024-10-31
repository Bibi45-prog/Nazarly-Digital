import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} className={clsx("max-w-[1500px] mx-auto px-4", className)}>
      {children}
    </div>
  );
};
