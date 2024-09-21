// pages/contact.tsx
"use client";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-white via-[#F7F3E9] to-white flex items-center justify-center px-4 pt-20 md:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-lg space-y-8">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3E2723] text-center">
            Get in Touch
          </h1>
          <p className="text-[#6D6D6D] text-center text-sm md:text-base">
            We'd love to hear from you! Send us a message, and we'll respond as soon as possible.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="w-full px-4 py-3 border border-[#3E2723] rounded-lg focus:ring-2 focus:ring-[#3E2723] focus:outline-none text-[#3E2723] transition duration-300"
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-3 px-1 bg-white transform -translate-y-1/2 text-sm text-[#6D6D6D]"
              >
                Your Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder=" "
                className="w-full px-4 py-3 border border-[#3E2723] rounded-lg focus:ring-2 focus:ring-[#3E2723] focus:outline-none text-[#3E2723] transition duration-300"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-3 px-1 bg-white transform -translate-y-1/2 text-sm text-[#6D6D6D]"
              >
                Your Email
              </label>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder=" "
                rows={4}
                className="w-full px-4 py-3 border border-[#3E2723] rounded-lg focus:ring-2 focus:ring-[#3E2723] focus:outline-none text-[#3E2723] transition duration-300"
              />
              <label
                htmlFor="message"
                className="absolute top-0 left-3 px-1 bg-white transform -translate-y-1/2 text-sm text-[#6D6D6D]"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#3E2723] text-white py-3 rounded-lg shadow-md hover:bg-[#2C1D1A] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
