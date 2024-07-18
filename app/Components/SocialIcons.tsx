'use client'



const SocialIcons = () => {

     
  return (
    <>

    <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-auto bg-[#FAF4E6] px-4 py-8 md:px-16 md:py-14">

      {/* Fragrances Card */}
      <div className="flex rounded-xl flex-col w-full sm:w-96 mx-auto mb-8 md:mb-0 bg-[#ffffff] text-gray-700 shadow-md transition-transform duration-500 hover:scale-105">
  <div style={{backgroundImage: `url('./jazabottles.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-gradient-to-r bg-cover bg-center"></div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
      Fragrances
    </h5>
    <p className="text-base font-light leading-relaxed">
      Transform every moment with the timeless charm of our exquisite perfumes.
    </p>
  </div>
  <div className="p-6 pt-0">
    <div style={{borderRadius:'10px'}} className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#14452F] shadow-lg hover:bg-[#14452F] text-[#14452F] hover:text-white duration-300 cursor-pointer active:scale-[0.98]">
      <button className="px-5 py-2"><a className="font-semibold" href="#">CHECK OUT</a></button>
    </div>
  </div>
</div>

      {/* Oils Card */}
      <div  className="flex rounded-xl flex-col w-full h-auto sm:w-96 mx-auto mb-8 md:mb-0 bg-[#ffffff] text-gray-700 shadow-md transition-transform duration-500 hover:scale-105">
        <div style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/05/05/84/01/1000_F_505840152_BmLvYvhhYY9qddSadhyzHfKHHqZrAcsa.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-blue-gray-500 bg-clip-border text-white shadow-lg  bg-cover bg-center "></div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Oils
          </h5>
          <p className="text-base font-light leading-relaxed">
            Elevate your daily rituals with our luxurious, hand-picked oils.
          </p>
        </div>
        <div className="p-6 pt-0">
        <div
        style={{borderRadius:'10px'}}
  className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#14452F] shadow-lg hover:bg-[#14452F] text-[#14452F] hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
>
  <button className="px-5 py-2"><a className="font-semibold" href="">CHECK OUT</a></button>
</div>
        </div>
      </div>

      {/* Gift / Kits Card */}
      <div   className="flex rounded-xl flex-col w-full h-auto sm:w-96 mx-auto mb-8 md:mb-0 bg-[#ffffff] text-gray-700 shadow-md transition-transform duration-500 hover:scale-105">
        <div style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/07/97/30/39/1000_F_797303992_4wWOx7Ar8XM0WAPUIdFe0TiRC3B14De2.jpg')`}} className="rounded-xl mx-4 -mt-6 h-40 bg-blue-gray-500 bg-clip-border text-white shadow-lg bg-cover bg-center "></div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            Gift / Kits
          </h5>
          <p className="text-base font-light leading-relaxed">
            Make every celebration memorable with our exquisite, hand-selected gifts.
          </p>
        </div>
        <div className="p-6 pt-0">
        <div
        style={{borderRadius:'10px'}}
  className="max-w-full h-10 bg-transparent items-center justify-center flex border-2 border-[#14452F] shadow-lg hover:bg-[#14452F] text-[#14452F] hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
>
  <button className="px-5 py-2"><a className="font-semibold" href="">CHECK OUT</a></button>
</div>
        </div>
      </div>
    </div>


    <div className='w-full h-96 flex'>

{/* Men Card */}
<div className='relative flex w-1/2 h-96'>
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
<div className='relative flex w-1/2 h-96'>
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

    <div className='flex w-full min-h-[500px] bg-[#F7F3E9]   justify-center'>
  <div style={{ position: 'relative', maxWidth: '100%' }}>
    <video src="./jazavid.mp4" className='w-full h-auto' autoPlay muted loop />
  </div>
</div>

    </>
  );
};


export default SocialIcons;