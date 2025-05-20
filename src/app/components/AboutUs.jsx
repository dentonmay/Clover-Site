"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/tech-clover.jpg"
              alt="About Us"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a passionate and highly trained team dedicated to bringing the best technologies to our customers. 
              Our goal is to create seamless user experiences through innovative design and technology.
            </p>
            <p className="mt-2 text-gray-600 leading-relaxed">
              With expertise in a wide variety of systems including; Nurse Call, Access Control, AV, Phones, Data Networks, Cameras, Security, Home Automation, Cloud Infrastructure, Copper and Fiber Optic Cabling, and more, we help customers and businesses bring their ideas to life.
            </p>
          </motion.div>
          <div className="container mx-auto px-4 py-10">
      <p className="text-lg text-center mb-6 text-black">
        Visit our office at this location.
      </p>

      {/* Google Maps Embed */}
      <div className="flex justify-center">
        <iframe
          className="w-full md:w-2/3 h-96 border rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12528.629786502188!2d-104.63049987016888!3d38.27584295168545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713a25625f8ee1d%3A0xa7d471a7a5d05ed9!2s920%20W%2010th%20St%2C%20Pueblo%2C%20CO%2081003!5e0!3m2!1sen!2sus!4v1741654124543!5m2!1sen!2sus" 
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  
        </div>
      </div>
    </section>
  );
}
