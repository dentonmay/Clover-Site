import Link from "next/link";
import { useState } from "react";

export default function DesktopNavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-gray-800">MyBrand</Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <div className="relative">
              <button onClick={() => setIsOpen(!isOpen)} className="hover:text-blue-600">
                Our Services ▼
              </button>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link href="/services/web-development" className="block px-4 py-2 hover:bg-gray-100">Web Development</Link>
                  <Link href="/services/mobile-apps" className="block px-4 py-2 hover:bg-gray-100">Mobile Apps</Link>
                  <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link>
                  <Link href="/services/branding" className="block px-4 py-2 hover:bg-gray-100">Branding</Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}