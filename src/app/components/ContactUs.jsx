"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('/clover-keyboard.jpg')" }} 
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-2xl mx-auto text-center text-white px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-lg">
          Have questions or need assistance? We’re here to help!
        </p>

        {/* Contact Us Button */}
        <motion.div 
          className="mt-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/contact">
            <button className="px-6 py-3 bg-green-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}