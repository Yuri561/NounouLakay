import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tone?: 'primary' | 'light' | 'outline' | 'coral';
}

const styles = {
  primary: 'bg-violet text-white hover:bg-[#3C347D] shadow-lg shadow-violet/20',
  light: 'bg-white text-violet hover:bg-lilac',
  outline: 'border border-line bg-white text-ink hover:border-violet/30 hover:bg-lilac/30',
  coral: 'bg-coral text-white hover:bg-[#D97866]',
};

export function Button({
  children,
  tone = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[tone]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
