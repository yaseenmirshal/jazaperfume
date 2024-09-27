'use client'
import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Carostop = () => {
const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

const [currentIndex, setCurrentIndex] = useState(0);
const intervalTime = 3000; // Time in milliseconds

const showSlide = (index:any) => {
  setCurrentIndex(index);
};

const nextSlide = () => {
  setCurrentIndex((currentIndex + 1) % images.length);
};

const prevSlide = () => {
  setCurrentIndex((currentIndex - 1 + images.length) % images.length);
};

useEffect(() => {
  const interval = setInterval(nextSlide, 3000);
  return () => clearInterval(interval);
}, [currentIndex]);


const perfumes = [
  {
    id: 1,
    name: "Al Hoob",
    price: "₹4450",
    category: "Category 1",
    image: "https://i.pinimg.com/564x/79/50/35/795035d20d005c82ad4c44c570f989e9.jpg",
  },
  {
    id: 2,
    name: "Suavage",
    price: "₹5660",
    category: "Category 2",
    image: "https://i.pinimg.com/736x/b3/85/88/b3858859812605215ecb2d0a06d75e81.jpg",
  },
  {
    id: 3,
    name: "Kourus",
    price: "₹2360",
    category: "Category 2",
    image: "https://i.pinimg.com/564x/41/b2/ae/41b2aee8f41704191c5beeb167ea82a3.jpg",
  },
  {
    id: 4,
    name: "oud greatness",
    price: "₹3360",
    category: "Category 2",
    image: "https://i.pinimg.com/564x/27/c3/66/27c3669fc93e11253a515f7657419847.jpg",
  },
  // Add more perfume objects as needed
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <> <div className='w-full  bg-[#F7F3E9]'>
    <div className="container mx-auto py-0 bg-[#F7F3E9] w-full "> 
     
      <Slider {...settings}>
        {perfumes.map((perfume) => (
         
          <div key={perfume.id} className="p-4 pb-10">
            <div className="bg-[#333333] rounded-xl overflow-hidden">
              <div
                style={{ backgroundImage: `url(${perfume.image})` }}
                className="bg-cover bg-center h-60"
              ></div>
              <div className="p-6">
                <h5 className="text-xl font-semibold text-richGold">{perfume.name}</h5>
                <p className="text-lg text-gray-300">{perfume.price}</p>
                <div className='flex float-left w-32 h-5'>
                  <p className="text-gray-500">{perfume.category}</p>
                </div>
                <div className="-mt-5 flex justify-end">
          
                  <a href="./Store">
                  <button className="bg-zinc-500 text-[#ffffff] py-2 px-4 rounded-full hover:bg-[#DAA520] hover:text-slate-950 transition duration-300">
                    Shop Now
                  </button>
                  </a>
               
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </Slider>
</div>
    </div>
    </>
  );
};


export default Carostop;


