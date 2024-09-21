'use client'

import Footer from "./Components/Footer";
import SocialIcons from "./Components/SocialIcons";
import Navbar from "./Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="hidden lg:flex flex-col md:flex-row">
        {/* Left Column */}
        <div
          className="w-full h-screen items-center justify-start pt-10 px-6 md:px-16 bg-cover bg-center"
          style={{ backgroundImage: 'url(./b4full.png)', zIndex: '-1' }}
        >
          <div className="text-left pt-72">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#3E2723]">
              Discover Your <br />Signature Scent
            </h1>
            <p className="text-lg md:text-2xl leading-relaxed mb-8 text-[#3E2723]">
              Indulge in our exclusive collection of <br /> captivating fragrances
            </p>

            <button
              className="cursor-pointer font-semibold text-lg md:text-xl py-2 px-5 rounded-lg shadow-lg bg-[#F5F5DC] text-[#3E2723] hover:bg-[#3E2723] hover:text-[#F5F5DC] transition duration-300 ease-in-out"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
     
      <SocialIcons />
      <Footer />
    </>
  );
};

export default Home;
