import { Home, LogIn, MessageCircle, User2 } from "lucide-react";

export function LeftSidebarList() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full">
        <div className="flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px] bg-card-foreground">
          <Home className="z-10 text-primary group-hover:text-white" />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">Dashboard</h2>
      </div>
      <div className="h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full">
        <div className="flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px] bg-card-foreground">
          <MessageCircle className="z-10 text-primary group-hover:text-white" />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">API request</h2>
      </div>
      <h2 className="my-4 text-white font-semibold text-sm pl-4">Account</h2>
      <div className="h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full">
        <div className="flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px] bg-card-foreground">
          <User2 className="z-10 text-primary group-hover:text-white" />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">Profile</h2>
      </div>
      <div className="h-[3.375rem] py-2 px-4 group rounded-[15px] transition hover:bg-[#1A1F37] cursor-pointer flex gap-4 items-center w-full">
        <div className="flex items-center justify-center size-10 group-hover:bg-primary transition rounded-[12px] bg-card-foreground">
          <LogIn className="z-10 text-primary group-hover:text-white" />
        </div>
        <h2 className="text-white font-semibold text-sm w-fit">SignIn</h2>
      </div>
    </div>
  );
}
