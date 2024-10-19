"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Contactco = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const images = [
    '/redbo.jpeg',
    '/rose.jpeg',
    '/luxury.jpeg',
    '/gold.jpeg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    // Simulate form submission (you can replace this with actual API call)
    try {
      console.log(formData); // Replace with your form submission logic
      // Reset form data
      setFormData({
        name: "",
        surname: "",
        email: "",
        message: "",
      });
      setSuccess("Your message has been sent successfully!");
    } catch (err) {
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <div
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-white py-16 px-4 pt-14 lg:px-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#14452F] text-sm font-bold uppercase mb-2 text-center"
        >
          Let's Spark a Conversation
        </motion.h2>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 text-center"
        >
          Get in Touch with Us
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 mb-16 max-w-2xl"
        >
          We invite you to reach out with any inquiries regarding our luxurious
          collections or to seek assistance in finding your perfect fragrance.
          Your satisfaction is our top priority.
        </motion.p>

        <div className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto bg-white shadow-lg">
          {/* Left Side - Carousel */}
          <div className="w-full lg:w-1/2 md:h-auto h-64 bg-gray-200 p-5 flex items-center justify-center relative overflow-hidden">
            {images.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Perfume ${index + 1}`}
                className={`absolute w-full transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 1 }}
              />
            ))}
          </div>

          {/* Right Side - Form */}
          <motion.div
            className="w-full lg:w-1/2 bg-gray-100 p-3 md:p-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-4 text-black border-b-2 border-gray-300 focus:outline-none focus:border-[#3E2723] focus:ring-0 focus:border-b-2 focus:border-b-[#3E2723] text-lg"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 text-black border-b-2 border-gray-300 focus:outline-none focus:border-[#3E2723] focus:ring-0 focus:border-b-2 focus:border-b-[#3E2723] text-lg"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-4 text-black border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:border-[#3E2723] focus:border-b-2 focus:border-b-[#3E2723] text-lg"
              />
              <button
                type="submit"
                className="w-full py-4 bg-[#3E2723] text-white font-bold text-lg hover:bg-[#0F3B26] transition duration-300"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contactco;
