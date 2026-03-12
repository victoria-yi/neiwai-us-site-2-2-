interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Overline({ children, className = '' }: OverlineProps) {
  return (
    <span
      className={`inline-block font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe ${className}`}
    >
      {children}
    </span>
  );
}
