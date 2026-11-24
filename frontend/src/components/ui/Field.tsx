import type { ReactNode } from 'react';

interface FieldProps {
  label: string;
  children: ReactNode;
  helper?: string;
}

export function Field({ label, children, helper }: FieldProps) {
  return (
    <label className="block text-sm font-bold text-ink">
      <span>{label}</span>
      {children}
      {helper && <span className="mt-1 block text-xs font-normal text-muted">{helper}</span>}
    </label>
  );
}
