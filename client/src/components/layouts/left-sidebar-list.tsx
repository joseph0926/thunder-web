"use client";

import { cn } from "@/lib/utils";
import { Home, LogIn, MessageCircle, User2 } from "lucide-react";
import { usePathname } from "next/navigation";

export function LeftSidebarList() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className={cn(
          "h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full",
          pathname === "/" ? "bg-[#1A1F37]" : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px]",
            pathname === "/" ? "bg-primary" : "bg-card-foreground"
          )}
        >
          <Home
            className={cn(
              "z-10 group-hover:text-white",
              pathname === "/" ? "text-white" : "text-primary"
            )}
          />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">Dashboard</h2>
      </div>
      <div
        className={cn(
          "h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full",
          pathname === "/request" ? "bg-[#1A1F37]" : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px]",
            pathname === "/request" ? "bg-primary" : "bg-card-foreground"
          )}
        >
          <MessageCircle
            className={cn(
              "z-10 group-hover:text-white",
              pathname === "/request" ? "text-white" : "text-primary"
            )}
          />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">API request</h2>
      </div>
      <h2 className="my-4 text-white font-semibold text-sm pl-4">Account</h2>
      <div
        className={cn(
          "h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full",
          pathname === "/profile" ? "bg-[#1A1F37]" : "bg-transparent"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px]",
            pathname === "/profile" ? "bg-primary" : "bg-card-foreground"
          )}
        >
          <User2
            className={cn(
              "z-10 group-hover:text-white",
              pathname === "/profile" ? "text-white" : "text-primary"
            )}
          />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">Profile</h2>
      </div>
      <div className="h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full">
        <div className="flex items-center justify-center bg-card-foreground size-10 group-hover:bg-primary transition rounded-[12px]">
          <LogIn className="z-10 group-hover:text-white text-primary" />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">SignIn</h2>
      </div>
    </div>
  );
}
