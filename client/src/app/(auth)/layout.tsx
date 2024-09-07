import { Vortex } from '@/components/ui/vortex';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full overflow-x-hidden">
      <div className="flex-1">
        <Vortex />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
