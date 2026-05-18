import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "",
  outline: "border border-white/10 bg-white/5 hover:bg-white/10",
};

export function Button({
  className,
  variant = "default",
  asChild = false,
  children,
  ...props
}) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
        children.props.className,
      ),
      ...props,
    });
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
