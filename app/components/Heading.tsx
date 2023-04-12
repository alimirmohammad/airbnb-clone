'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function Heading({ title, subtitle, center }: HeadingProps) {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-neutral-500 font-light mt-2">{subtitle}</div>
    </div>
  );
}
