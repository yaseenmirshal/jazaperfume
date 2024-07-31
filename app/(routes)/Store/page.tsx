"use client";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";

function Page() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const products = [
    {
      id: 1,
      name: 'Nike Air MX Super 2500 - Red',
      image1: 'https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg',
      image2: 'https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg',
      price: 449,
      originalPrice: 699,
      discount: '39% OFF',
    },
    
    // Add more products as needed
  ];
  

  const handleFilter = () => {
    // Add your filtering logic here
    console.log(`Filter by price: ${minPrice} - ${maxPrice}`);
  };

  return (
    <div className="flex">
      <Navbar />

      <div className="flex w-96 h-screen bg-gray-300">
        <div className="flex flex-col w-full h-full p-4 bg-white shadow-lg rounded-lg text-gray-800 pt-24 font-sans overflow-auto">
          {/* <h1 className="text-3xl font-bold mb-6 pl-4 text-[#A9864E]">Filters</h1> */}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold pl-4 text-[#3E2723]">
              Fragrances
            </h2>
            <div className="ml-6 mt-4 space-y-2">
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Mens
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Womens
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Unisex
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold pl-4 text-[#3E2723]">Oils</h2>
            <div className="ml-6 mt-4 space-y-2">
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Mens
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Womens
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                Unisex
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold pl-4 text-[#3E2723]">
              Size (ml)
            </h2>
            <div className="ml-6 mt-4 space-y-2">
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                10ml
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                50ml
              </p>
              <p className="cursor-pointer transition hover:text-[#A9864E]">
                100ml
              </p>
            </div>
          </div>

          <div className="mb-6">
  <h2 className="text-2xl font-semibold pl-4 text-[#3E2723]">Price</h2>
  <div className="ml-6 mt-4 space-y-2">
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="range1" className="cursor-pointer"/>
      <label htmlFor="range1" className="cursor-pointer">₹ 0 - ₹ 500</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="range2" className="cursor-pointer"/>
      <label htmlFor="range2" className="cursor-pointer">₹ 500 - ₹ 1,000</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="range3" className="cursor-pointer"/>
      <label htmlFor="range3" className="cursor-pointer">₹ 1,000 - ₹ 2,000</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="range4" className="cursor-pointer"/>
      <label htmlFor="range4" className="cursor-pointer">₹ 3,000 - ₹ 4,000</label>
    </div>
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="range5" className="cursor-pointer"/>
      <label htmlFor="range5" className="cursor-pointer">₹ 4,000 - above</label>
    </div>
  </div>

  <div className="mt-4 flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      {/* <label htmlFor="min" className="mr-2">Min:</label> */}
      <input
        type="number"
        id="min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        className="w-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9864E] border-[#A9864E]"
        placeholder="₹ Min"
      />
    </div>
    <div className="flex items-center space-x-2">
      {/* <label htmlFor="max" className="mr-2">Max:</label> */}
      <input
        type="number"
        id="max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        className="w-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9864E] border-[#A9864E]"
        placeholder="₹ Max"
      />
    </div>
    <button
      onClick={handleFilter}
      className="py-2 px-4 bg-[#A9864E] text-white rounded-lg hover:bg-[#3E2723] transition duration-300"
    >
      Apply
    </button>
  </div>
</div>





          
        </div>
      </div>

      <div className=" w-full h-screen bg-zinc-500 flex justify-center items-center p-4 flex-wrap overflow-auto">
      {products.map((product) => (
        <div key={product.id} className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.image1} alt="product image" />
            <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={product.image2} alt="product image" />
            <div className="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center">
              {/* Add pagination dots if needed */}
              <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
              <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
              <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
            </div>
            <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{product.discount}</span> 
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-sm text-slate-900 line-through">${product.originalPrice}</span>
              </p>
            </div>
            <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
      ))}



</div>

    </div>
  );
}

export default Page;
