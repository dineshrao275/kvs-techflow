import Image from 'next/image';
import Link from 'next/link';
import kvslogo from '@/public/images/kvs_logo.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <div className="relative w-40 h-14">
        <Image
          src={kvslogo}
          alt="KVS Techflow Logo"
          fill
          style={{ objectFit: 'contain' }}
          className="w-full h-full"
          priority
        />
      </div>
    </Link>
  );
}
