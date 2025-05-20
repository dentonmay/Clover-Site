"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold pt-3">
          <Image width={150} height={150} src="/Clover-Tech-Website-Logo.png" alt="Clover Technologies Logo" />
        </Link>

       {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 z-50">
          <Link href="/" className="text-xl hover:text-green-800 hover:font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-xl hover:text-green-800 hover:font-semibold">
            About Us
          </Link>
          <Link href="/services" className="text-xl hover:text-green-800 hover:font-semibold">
            Our Services
          </Link>
          <Link href="/contact" className="text-xl hover:text-green-800 hover:font-semibold">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800 py-6 absolute top-16 left-0 w-full shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-6 z-50">
              <Link
                href="/"
                className="hover:text-green-800 transition duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-green-800 transition duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="hover:text-green-800 transition duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-green-800 transition duration-300 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

