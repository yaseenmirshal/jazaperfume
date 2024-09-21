// pages/about.tsx
import React from "react";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
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
      </section>
      <Footer/>
    </>
  );
};

export default AboutPage;
