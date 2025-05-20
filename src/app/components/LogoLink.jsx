import Link from 'next/link';
import Image from 'next/image';

export default function LogoLink() {
  return (
    <div className="mb-4 mt-6 text-center sm:mb-0">
      <Link href="/">
        {/* Your logo component */}
        <Image width={250} height={250} src="/Clover-Tech-Website-Logo.png" alt="Clover Technologies Logo"/>
      </Link>
    </div>
  );
}