'use client'
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";

function Sidebar() {

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleFilter = () => {
        // Add your filtering logic here
        console.log(`Filter by price: ${minPrice} - ${maxPrice}`);
      };
  return (
    <>
     <div className="hidden lg:flex w-[350px] h-auto bg-white overflow-auto">
          
          <div className="p-4 pt-24 h-screen bg-white rounded-lg text-gray-800">
            {/* Filters */}
            <div className="mb-8">
              <h2 className="font-semibold ml-4 text-[#3E2723]">FRAGRANCES</h2>
              <div className="ml-6 mt-4 space-y-2">
                <p className="cursor-pointer transition hover:text-[#A9864E]">Mens</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">Womens</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">Unisex</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="font-semibold ml-4 text-[#3E2723]">OILS</h2>
              <div className="ml-6 mt-4 space-y-2">
                <p className="cursor-pointer transition hover:text-[#A9864E]">Mens</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">Womens</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">Unisex</p>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="font-semibold ml-4 text-[#3E2723]">SIZE</h2>
              <div className="ml-6 mt-4 space-y-2">
                <p className="cursor-pointer transition hover:text-[#A9864E]">10ml</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">50ml</p>
                <p className="cursor-pointer transition hover:text-[#A9864E]">100ml</p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold ml-4 text-[#3E2723]">PRICE</h2>
              <div className="ml-6 mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="range1" className="cursor-pointer" />
                  <label htmlFor="range1" className="cursor-pointer">₹ 0 - ₹ 500</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="range2" className="cursor-pointer" />
                  <label htmlFor="range2" className="cursor-pointer">₹ 500 - ₹ 1,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="range3" className="cursor-pointer" />
                  <label htmlFor="range3" className="cursor-pointer">₹ 1,000 - ₹ 2,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="range4" className="cursor-pointer" />
                  <label htmlFor="range4" className="cursor-pointer">₹ 3,000 - ₹ 4,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="range5" className="cursor-pointer" />
                  <label htmlFor="range5" className="cursor-pointer">₹ 4,000 - above</label>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4 pb-10">
                <input
                  type="number"
                  id="min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9864E] border-[#A9864E]"
                  placeholder="₹ Min"
                />
                <input
                  type="number"
                  id="max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9864E] border-[#A9864E]"
                  placeholder="₹ Max"
                />
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

    </>
  )
}

export default Sidebar