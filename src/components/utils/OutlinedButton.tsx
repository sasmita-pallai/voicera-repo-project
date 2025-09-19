import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface OutlinedButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  InnerClass?: string;
}

export function OutlinedButton({
  children,
  onClick,
  className,
  InnerClass
}: OutlinedButtonProps) {
  const classes = {
    basic:
      "min-w-[5rem] w-auto h-[2.5rem] text-primaryB text-center flex justify-center items-center rounded-[3rem] font-medium bg-gradient-to-tl from-accent to-primaryC p-[3px] cursor-pointer hover:scale-103 duration-300",
    inner:
      "font-primary w-full h-full flex gap-2 justify-center items-center bg-black rounded-[2.8rem] p-3",
  };

  return (
    <button className={twMerge(classes.basic, className)} onClick={onClick}>
      <div className={twMerge(classes.inner, InnerClass)}>{children}</div>
    </button>
  );
}
