import { LeftSidebar } from '@/components/layouts/left-sidebar';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-full w-full">
      <Image src="/bg.png" alt="bg" fill className="absolute left-0 top-0 -z-10 scale-110" />
      <div className="flex h-full">
        <LeftSidebar />
        <div className="w-[calc(100%-16.5rem)] px-6 py-5">{children}</div>
      </div>
    </main>
  );
}
