import Image from 'next/image';

interface FlagIconProps {
  country: 'us' | 'do';
  className?: string;
  size?: number;
}

export default function FlagIcon({ country, className = '', size = 20 }: FlagIconProps) {
  return (
    <Image
      src={`/flags/${country}.svg`}
      alt={country === 'us' ? 'United States' : 'Dominican Republic'}
      width={Math.round(size * 4 / 3)}
      height={size}
      className={`inline-block rounded-sm object-cover ${className}`}
    />
  );
}
