import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Clover Technologies</h2>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center - Navigation Links */}
          <nav className="my-4 md:my-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-green-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-800">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-800">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-green-800">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section - Social Media */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;