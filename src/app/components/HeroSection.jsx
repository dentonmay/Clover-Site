"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection({ imageUrl, title, description, buttonText, buttonLink }) {
    // Track the page scroll
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]); // Moves the background slower than the scroll
  
    return (
        <motion.div
          style={{ backgroundImage: `url(${imageUrl})`, y }}
          className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
    
          {/* Text Content (Centered Properly) */}
          <motion.div
            className="relative z-10 flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-2 text-lg">{description}</p>
    
            {/* Centered Button with Icon & Hover Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              <Link href={buttonLink}>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(59, 130, 246, 0.5)" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-4 flex items-center gap-2 px-6 py-3 bg-green-800 hover:bg-blue-700 transition-all duration-300 text-white font-semibold rounded-lg shadow-lg"
                >
                  {buttonText} 
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    }