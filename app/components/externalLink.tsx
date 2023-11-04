import clsx from 'clsx';

export default function ExternalLink({ children, className, to }: any) {
  return (
    <a className={clsx('hover:text-primary', className)} href={to}>
      {children}
    </a>
  );
}
