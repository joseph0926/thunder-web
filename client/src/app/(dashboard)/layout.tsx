import { LeftSidebar } from "@/components/layouts/left-sidebar";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full h-full">
      <Image
        src="/bg.png"
        alt="bg"
        fill
        className="absolute top-0 left-0 -z-10 scale-110"
      />
      <div className="flex h-full">
        <LeftSidebar />
        <div className="w-[calc(100%-16.5rem)] py-5 px-6">{children}</div>
      </div>
    </main>
  );
}
