import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading-lg mt-3">{title}</h2>
        {description && <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}
