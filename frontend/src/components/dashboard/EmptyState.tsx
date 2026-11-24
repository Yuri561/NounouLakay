import type { ReactNode } from 'react';

export function EmptyState({ icon, title, description, action }: {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="card grid min-h-[240px] place-items-center p-8 text-center">
      <div className="max-w-md">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-lilac text-violet">{icon}</span>
        <h3 className="mt-4 font-display text-lg font-extrabold">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
        {action && <div className="mt-5">{action}</div>}
      </div>
    </div>
  );
}
