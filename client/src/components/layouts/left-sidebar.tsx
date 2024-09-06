import { Separator } from '@/components/ui/separator';
import { LeftSidebarList } from './left-sidebar-list';

export function LeftSidebar() {
  return (
    <div className="bg-main-grad flex h-full w-[16.5rem] flex-col items-center px-5 py-9 shadow-2xl">
      <div className="flex items-center gap-3 text-xl uppercase">
        <h1 className="text-white">THUNDER</h1>
        <div className="flex items-center">
          <h1 className="text-white text-opacity-70">W</h1>
          <h1 className="text-white text-opacity-40">E</h1>
          <h1 className="text-white text-opacity-25">B</h1>
        </div>
      </div>
      <Separator className="mb-6 mt-8 h-[2px] bg-gradient-to-r from-white/10 via-white to-white/10" />
      <LeftSidebarList />
    </div>
  );
}
