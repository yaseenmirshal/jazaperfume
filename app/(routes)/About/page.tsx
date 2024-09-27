// pages/about.tsx
'use client'
import React from "react";
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <>

      <section className="min-h-screen bg-gradient-to-br from-white via-[#F7F3E9] to-white pt-36 py-12 border-y-2">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-[#3E2723]">
              About Jaza Perfumes
            </h1>
            <p className="mt-4 text-lg text-[#6D6D6D]">
              The art of Arabian fragrance redefined.
            </p>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            {/* Image Section */}
            <div className="flex-1 mb-8 md:mb-0 rounded-sm">
            <video src="./jazavid.mp4" className='w-full h-auto' autoPlay muted loop />
            </div>

            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-[#3E2723] mb-4">
                Our Journey
              </h2>
              <p className="text-[#6D6D6D] mb-6">
                Jaza Perfumes began with a vision to craft luxurious, high-quality perfumes inspired by the rich, alluring scents of the Middle East. Each of our fragrances tells a unique story, capturing the essence of tradition while embracing modern sophistication.
              </p>
              <p className="text-[#6D6D6D] mb-6">
              Our team of expert perfumers and artisans handpick the finest ingredients, ensuring that every fragrance is free from harmful chemicals. We believe in delivering scents that evoke deep emotions and create lasting impressions, without compromising your health. Whether you're seeking a bold statement scent or a subtle fragrance for everyday wear, Jaza Perfumes has something special for every personality.
                              </p>

              {/* CTA Button */}
              <a
                href="/Store"
                className="inline-block px-8 py-3 bg-[#3E2723] text-white font-semibold rounded-lg shadow-md hover:bg-[#2C1D1A] transition duration-300"
              >
                Explore Our Collection
              </a>
            </div>
          </div>

           {/* Highlight Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-1 mt-14 mb-14 md:grid-cols-3 gap-8"
      >
        <div className="bg-white p-6  rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">No Harmful Chemicals</h3>
          <img src="./nochemi.jpg" alt="No Harmful Chemicals" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            Our fragrances are free from harmful chemicals, ensuring safe and luxurious scents.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">Sustainable Ingredients</h3>
          <img src="./ingredients.jpg" alt="Sustainable Ingredients" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            We use sustainable, eco-friendly ingredients to create unique fragrances that you can feel good about.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">Cruelty-Free Products</h3>
          <img src="./nature.jpg" alt="Cruelty-Free Products" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            All our products are cruelty-free, ethically sourced, and produced without animal testing.
          </p>
        </div>
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e2723]">
          A Fragrance for Every Moment
        </h2>
        <p className="mt-4 text-lg text-[#5C5C5C]">
          Whether you're looking for a subtle daytime scent or a bold evening perfume, Jaza Perfumes has something for every occasion.
        </p>
      </motion.div>

          {/* Mission Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-semibold text-center text-[#3E2723] mb-4">
              Our Mission
            </h2>
            <p className="text-center text-[#6D6D6D] max-w-3xl mx-auto">
              At Jaza Perfumes, our mission is to bring the captivating world of Arabian fragrances to the modern perfume lover. We are committed to delivering unparalleled quality, blending authenticity with contemporary elegance, ensuring every fragrance leaves a timeless mark.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mt-16 ">
            <h2 className="text-3xl font-semibold text-center text-[#3E2723] mb-4 ">
              Our Vision
            </h2>
            <p className="text-center text-[#6D6D6D] max-w-3xl mx-auto">
              We aim to be a global leader in luxury perfumes, bridging the gap between the rich traditions of Arabian perfumery and the evolving tastes of perfume enthusiasts around the world.
            </p>
          </div>
        </div>


        <div className="container mx-auto py-8 px-4 sm:px-8">
  <div className="bg-gray-100 w-full max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col items-center md:items-start justify-center">
        <img
          src="ingre.png"
          alt="Perfume ingredients"
          className="w-full max-w-xs h-auto object-cover" // Image will adjust to screen size
        />
      </div>
      <div className="flex w-full md:w-80 flex-col justify-center md:items-start items-center">
        <h2 className="text-2xl md:text-3xl text-black font-bold mb-4">
          Luxury You Can Trust
        </h2>
        <p className="text-base md:text-start text-center md:text-lg text-black mb-4">
          Our perfumes are designed to provide an unforgettable olfactory experience, made from premium quality ingredients that ensure longevity and richness.
        </p>
        <h3 className="text-xl md:text-2xl text-black font-bold mb-4">
          A Symphony of Scents
        </h3>
        <p className="text-base md:text-start text-center md:text-lg text-black">
          Each perfume is a carefully composed symphony, artfully blending notes to create a unique and captivating fragrance profile.
        </p>
      </div>
    </div>
  </div>
</div>



      </section>
   
    </>
  );
};

export default AboutPage;
