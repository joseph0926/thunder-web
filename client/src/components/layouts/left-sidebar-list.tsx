'use client';

import { cn } from '@/lib/utils';
import { Home, LogIn, MessageCircle, User2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function LeftSidebarList() {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col gap-3">
      <div
        className={cn(
          'group flex h-[3.375rem] w-full cursor-pointer items-center gap-4 rounded-[15px] px-4 py-2 transition hover:bg-[#1A1F37]',
          pathname === '/' ? 'bg-[#1A1F37]' : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-[12px] transition group-hover:bg-primary',
            pathname === '/' ? 'bg-primary' : 'bg-card-foreground'
          )}
        >
          <Home
            className={cn(
              'z-10 group-hover:text-white',
              pathname === '/' ? 'text-white' : 'text-primary'
            )}
          />
        </div>
        <h2 className="w-fit text-sm font-semibold text-white">Dashboard</h2>
      </div>
      <div
        className={cn(
          'group flex h-[3.375rem] w-full cursor-pointer items-center gap-4 rounded-[15px] px-4 py-2 transition hover:bg-[#1A1F37]',
          pathname === '/request' ? 'bg-[#1A1F37]' : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-[12px] transition group-hover:bg-primary',
            pathname === '/request' ? 'bg-primary' : 'bg-card-foreground'
          )}
        >
          <MessageCircle
            className={cn(
              'z-10 group-hover:text-white',
              pathname === '/request' ? 'text-white' : 'text-primary'
            )}
          />
        </div>
        <h2 className="w-fit text-sm font-semibold text-white">API request</h2>
      </div>
      <h2 className="my-4 pl-4 text-sm font-semibold text-white">Account</h2>
      <div
        className={cn(
          'group flex h-[3.375rem] w-full cursor-pointer items-center gap-4 rounded-[15px] px-4 py-2 transition hover:bg-[#1A1F37]',
          pathname === '/profile' ? 'bg-[#1A1F37]' : 'bg-transparent'
        )}
      >
        <div
          className={cn(
            'flex size-10 items-center justify-center rounded-[12px] transition group-hover:bg-primary',
            pathname === '/profile' ? 'bg-primary' : 'bg-card-foreground'
          )}
        >
          <User2
            className={cn(
              'z-10 group-hover:text-white',
              pathname === '/profile' ? 'text-white' : 'text-primary'
            )}
          />
        </div>
        <h2 className="w-fit text-sm font-semibold text-white">Profile</h2>
      </div>
      <div className="group flex h-[3.375rem] w-full cursor-pointer items-center gap-4 rounded-[15px] px-4 py-2 transition hover:bg-[#1A1F37]">
        <div className="flex size-10 items-center justify-center rounded-[12px] bg-card-foreground transition group-hover:bg-primary">
          <LogIn className="z-10 text-primary group-hover:text-white" />
        </div>
        <h2 className="w-fit text-sm font-semibold text-white">SignIn</h2>
      </div>
    </div>
  );
}
