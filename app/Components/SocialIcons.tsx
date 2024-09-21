'use client'
import Curostop from "./Curostop"
import Curos from "./Curos"

const SocialIcons = () => {
  return (
    <>
     <Curostop/>
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
      <Curos/>
      <div className='w-full h-auto flex'>
       
        {/* Men Card */}
        <div className='relative border-none flex w-1/2 h-96  bg-white'>
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
        <div className='relative flex w-1/2 h-96  bg-white'>
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

      {/* Carousel div */}
      <div className="bg-[#1C1C1C]">
      
      </div>

      {/* Banner section */}
      {/* <div
        className="w-full h-screen flex items-center justify-start pt-10 px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: 'url(./jazabanner.jpg)' }}
      ></div> */}

      {/* Video section
      <div className='flex w-full min-h-auto bg-darkCharcoal justify-center'>
        <div style={{ position: 'relative', maxWidth: '100%' }}>
          <video src="./jazavid.mp4" className='w-full h-auto' autoPlay muted loop />
        </div>
      </div> */}
    </>
  );
};

export default SocialIcons;
