import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type CardProps = ComponentProps<"div">;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn("bg-main-grad p-5 rounded-[20px]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
