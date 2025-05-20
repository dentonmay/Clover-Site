"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setStatus("loading");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div 
        className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
        <p className="mt-2 text-gray-600 text-center">
          Have questions? Reach out, and we’ll get back to you soon!
        </p>

        {/* Contact Form */}
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input {...register("name")} type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input {...register("email")} type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea {...register("message")} rows="4" placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-green-800 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Status Messages */}
        {status === "success" && <p className="text-green-600 text-center mt-4">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-600 text-center mt-4">Something went wrong. Try again.</p>}
      </motion.div>
    </section>
  );
}