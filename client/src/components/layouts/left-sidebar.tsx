import { Separator } from "@/components/ui/separator";
import { LeftSidebarList } from "./left-sidebar-list";

export function LeftSidebar() {
  return (
    <div className="w-[16.5rem] bg-main-grad h-full py-9 px-5 flex flex-col items-center shadow-2xl">
      <div className="text-xl uppercase flex items-center gap-3">
        <h1 className="text-white">THUNDER</h1>
        <div className="flex items-center">
          <h1 className="text-white text-opacity-70">W</h1>
          <h1 className="text-white text-opacity-40">E</h1>
          <h1 className="text-white text-opacity-25">B</h1>
        </div>
      </div>
      <Separator className="mt-8 h-[2px] mb-6 bg-gradient-to-r from-white/10 via-white to-white/10" />
      <LeftSidebarList />
    </div>
  );
}
