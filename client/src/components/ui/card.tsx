import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

type CardProps = ComponentProps<'div'>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={cn('bg-main-grad rounded-[20px] p-5', className)} {...props}>
      {children}
    </div>
  );
}
