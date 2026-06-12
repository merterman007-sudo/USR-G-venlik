import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 shadow-sm hover:bg-slate-200 focus-visible:outline-white",
        dark: "bg-slate-950 text-white hover:bg-slate-800 focus-visible:outline-slate-950",
        outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10 focus-visible:outline-white",
        soft: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus-visible:outline-slate-200",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        navy: "bg-[#07162f] text-white hover:bg-[#102348] focus-visible:outline-[#07162f]",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-13 px-7 text-base",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
