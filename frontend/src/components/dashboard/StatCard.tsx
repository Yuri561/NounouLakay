import type { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  caption: string;
  accent?: string;
}

export function StatCard({ icon, label, value, caption, accent = 'bg-lilac text-violet' }: StatCardProps) {
  return (
    <div className="card p-5 sm:p-6">
      <div className={`grid h-11 w-11 place-items-center rounded-xl ${accent}`}>{icon}</div>
      <p className="mt-5 text-xs font-bold text-muted">{label}</p>
      <p className="mt-1 font-display text-3xl font-extrabold">{value}</p>
      <p className="mt-2 text-xs text-muted">{caption}</p>
    </div>
  );
}
