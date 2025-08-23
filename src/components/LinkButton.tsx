import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({
  href,
  children,
  className = '',
}: LinkButtonProps) {
  const defaultClasses =
    'inline-block bg-primary text-white px-8 py-3 font-bold tracking-wider uppercase hover:bg-secondary transition-colors duration-200 rounded-md';

  return (
    <Link href={href} className={`${defaultClasses} ${className}`.trim()}>
      {children}
    </Link>
  );
}
