'use client'
import { useEffect,useState } from 'react';
import Curostop from "./Curostop"
import Curos from "./Curos"
import AOS from 'aos';
import 'aos/dist/aos.css';



const SocialIcons = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const quotes = [
    'Perfume is the key to our memories.',
    'Elegance is the only beauty that never fades.',
    'A fragrance defines your aura.',
    'Luxury is in each detail.',
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const timelineData = [
    { year: '2021', description: 'The idea for Jaza Perfumes was born.' },
    { year: '2022', description: 'First collection launched with exquisite artisan blends.' },
    { year: '2023', description: 'Recognized for long-lasting, premium-quality fragrances.' },
    { year: '2024', description: 'Expanded into global markets, winning numerous awards.' },
  ];


  return (
    <>

     <Curostop/>
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full min-h-auto bg-darkCharcoal px-4 py-8 md:px-16 md:py-14 bg-[#F7F3E9]">
        {/* Fragrances Card */}
          <div className="flex flex-col rounded-xl w-full bg-[#1e1e1e] text-[#e0e0e0] shadow-md transition-transform duration-500 mb-8 mt-10 md:mb-0 md:mt-0 md:hover:scale-105 hover:object-scale-down">
  <div style={{backgroundImage: `url('./jazabottles.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-[#333333] bg-clip-border text-white shadow-lg bg-gradient-to-r bg-cover bg-center"></div>
  
  <div className="p-6">
    <h5 className="mb-2 text-xl font-semibold text-[#d4af37]">
      Fragrances
    </h5>
    <p className="text-base font-light leading-relaxed text-[#b0bec5]">
      Transform every moment with the timeless charm of our exquisite perfumes.
    </p>
  </div>
  
  <div className="p-6 pt-0">
    <div style={{borderRadius:'10px'}} className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#d4af37] shadow-lg hover:bg-[#d4af37] text-[#d4af37] hover:text-[#1e1e1e] duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2">
        <a className="font-semibold" href="/Store">CHECK OUT</a>
      </button>
    </div>
  </div>
</div>



        {/* Oils Card */}
       <div className="flex flex-col rounded-xl w-full bg-[#1e1e1e] text-[#e0e0e0] shadow-md transition-transform duration-500 md:hover:scale-105 hover:object-scale-down mb-8 md:mb-0 md:mt-0">
  <div style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/05/05/84/01/1000_F_505840152_BmLvYvhhYY9qddSadhyzHfKHHqZrAcsa.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-[#333333] bg-clip-border text-white shadow-lg bg-cover bg-center"></div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-semibold text-[#d4af37]">
      Oils
    </h5>
    <p className="text-base font-light leading-relaxed text-[#b0bec5]">
      Elevate your daily rituals with our luxurious, hand-picked oils.
    </p>
  </div>
  <div className="p-6 pt-0">
    <div style={{borderRadius:'10px'}} className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#d4af37] shadow-lg hover:bg-[#d4af37] text-[#d4af37] hover:text-[#1e1e1e] duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2"><a className="font-semibold" href="/Store">CHECK OUT</a></button>
    </div>
  </div>
</div>

        {/* Gift / Kits Card */}
        <div className="flex flex-col rounded-xl w-full bg-[#1e1e1e] text-gray-200 shadow-md transition-transform duration-500 md:hover:scale-105 hover:object-scale-down">
          <div style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/07/97/30/39/1000_F_797303992_4wWOx7Ar8XM0WAPUIdFe0TiRC3B14De2.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-cover bg-center"></div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-semibold text-[#d4af37]">
              Gift / Kits
            </h5>
            <p className="text-base font-light leading-relaxed">
              Make every celebration memorable with our exquisite, hand-selected gifts.
            </p>
          </div>
          <div className="p-6 pt-0">
          <div style={{borderRadius:'10px'}} className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#d4af37] shadow-lg hover:bg-[#d4af37] text-[#d4af37] hover:text-[#1e1e1e] duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2"><a className="font-semibold" href="/Store">CHECK OUT</a></button>
    </div>
          </div>
        </div>
      </div>


<div className="w-full  bg-[#F7F3E9]">
      <div className="container   mx-auto py-16 px-4 md:px-0">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#3e2723]">Our Unique Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img src="/greenbo.png" alt="High Quality" className="w-full mb-4" />
          <h3 className="text-2xl font-bold text-[#3e2723] mb-2">High Quality</h3>
          <p className="text-gray-700">Made from the finest ingredients to ensure an unforgettable olfactory experience.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img src="/waterfall.png" alt="Long Lasting" className="w-full mb-4" />
          <h3 className="text-2xl font-bold text-[#3e2723] mb-2">Long Lasting</h3>
          <p className="text-gray-700">Enjoy fragrances that linger all day, creating an impression that lasts.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <img src="/artist.png" alt="Artisan Blends" className="w-full mb-4" />
          <h3 className="text-2xl font-bold text-[#3e2723] mb-2">Artisan Blends</h3>
          <p className="text-gray-700">Crafted by master perfumers, blending the perfect notes for an exquisite scent.</p>
        </div>
      </div>
    </div>
</div>

{/* Animated quote */}
<div className="bg-[#f7f3e9]  py-16 text-center">
      <h2 className="text-3xl md:text-4xl  font-bold text-[#3e2723] mb-8" data-aos="fade-in">
        Inspiration Behind Our Scents
      </h2>
      <p
        className="text-2xl font-semibold text-[#3e2723] transition-opacity duration-1000"
        data-aos="fade-up"
        key={currentQuoteIndex}
      >
        {quotes[currentQuoteIndex]}
      </p>
    </div>
      
      <Curos/>

    {/* timeline sections */}
    <div className='w-full  bg-[#f7f3e9]'>
    <div className="container mx-auto py-16 px-4 md:px-0">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#3e2723]">
        Our Journey
      </h2>
      <div className="relative">
        <div className="absolute h-full w-1 bg-[#3e2723] left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className={`flex items-center justify-${index % 2 === 0 ? 'start' : 'end'}`}
            >
              <div
                className="w-1/2 p-6 bg-white rounded-lg shadow-lg text-[#3e2723]"
                style={{
                  animationDelay: `${index * 300}ms`,
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>


      <div className='w-full h-auto flex'>
       
        {/* Men Card */}
    
        <div className='relative border-none flex w-1/2 h-96 hover:cursor-pointer  bg-white'>
          <div className='relative w-full h-full overflow-hidden'>
            <div
              style={{ backgroundImage: `url('https://i.pinimg.com/736x/2f/da/4b/2fda4bb2f061b21b541d5bcd2304ce62.jpg')` }}
              className='w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105'
            ></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 flex justify-right items-center">
            <h3 className="text-white text-lg font-bold font-serif">Men</h3>
          </div>
        </div>
    
        {/* Women Card */}
       
        <div className='relative flex w-1/2 h-96 hover:cursor-pointer  bg-white'>
          <div className='relative w-full h-full overflow-hidden'>
            <div
              style={{ backgroundImage: `url('https://perfumania.com/cdn/shop/articles/Best_Versace_Perfumes_for_Women_in_2024.webp?v=1715884495')` }}
              className='w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-105'
            ></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-4 flex justify-right items-center">
            <h3 className="text-white text-lg font-bold font-serif">Women</h3>
          </div>
        </div>
      </div>


    </>
  );
};

export default SocialIcons;
