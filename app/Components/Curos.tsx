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
    name: "Areej Al Oud",
    price: "₹1250",
    category: "Category 1",
    image: "https://i.pinimg.com/736x/d0/1a/16/d01a16e0b94fd57065f75e465533e6ae.jpg",
  },
  {
    id: 2,
    name: "Imperial Blue",
    price: "₹1300",
    category: "Category 2",
    image: "https://www.aarfragrances.com/public/uploads/all/rTCtx5Yk5yb9CzDPwlI50OurncSxizWsA7utKXHX.jpg",
  },
  {
    id: 3,
    name: "khalat Al Dhahabi",
    price: "₹2360",
    category: "Category 2",
    image: "https://i.pinimg.com/736x/9f/36/81/9f36812779154c642d7510fb53608a46.jpg",
  },
  {
    id: 4,
    name: "Kourus",
    price: "₹2360",
    category: "Category 2",
    image: "https://i.pinimg.com/564x/41/b2/ae/41b2aee8f41704191c5beeb167ea82a3.jpg",
  },
  {
    id: 5,
    name: "oud greatness",
    price: "₹1999",
    category: "Category 2",
    image: "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_790/01/nm_2877630_100000_b.jpg",
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
    <> 
    <div className='w-full bg-[#F7F3E9]'>
  <div className="container mx-auto py-0 bg-[#F7F3E9] w-full">
    <Slider {...settings}>
      {perfumes.map((perfume) => (
        <div key={perfume.id} className="p-4 pb-10">
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden">
            <div
              style={{ backgroundImage: `url(${perfume.image})` }}
              className="bg-cover bg-center h-72"
            ></div>
            <div className="p-6">
              <h5 className="text-xl font-semibold text-[#DAA520]">{perfume.name}</h5>
              <p className="text-lg text-[#F7F3E9]">{perfume.price}</p>
              <div className='flex float-left w-32 h-5'>
                <p className="text-[#f0e8d9]">{perfume.category}</p>
              </div>
              <div className="-mt-5 flex justify-end">
                <a href="./Store">
                  <button className="bg-gray-700 text-[#F7F3E9] py-2 px-4 rounded-full hover:bg-[#DAA520] hover:text-[#3e2723] transition duration-300">
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


