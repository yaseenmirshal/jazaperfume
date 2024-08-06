"use client";
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";

function Page() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // const [favorites, setFavorites] = useState(new Set());

  // const toggleFavorite = (productId) => {
  //   setFavorites((prev) => {
  //     const newFavorites = new Set(prev);
  //     if (newFavorites.has(productId)) {
  //       newFavorites.delete(productId);
  //     } else {
  //       newFavorites.add(productId);
  //     }
  //     return newFavorites;
  //   });
  // };

  const products = [
    {
      id: 1,
      name: "LAVENDER OUD",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "PURE HD",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "YSL KOUROS",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "BLACK XS",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "ACTRESS",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "PARDA - LEMON",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "PARDA - LEMON",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "PARDA - LEMON",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
    },
    {
      id: 1,
      name: "PARDA - LEMON",
      image1:
        "https://i.pinimg.com/564x/e6/39/29/e639291e6f24d22a06160618483421ff.jpg",
      image2:
        "https://i.pinimg.com/564x/d3/df/a1/d3dfa1b0348b8aacb93a7fb9c08aa3da.jpg",
      price: 449,
      originalPrice: 699,
      discount: "39% OFF",
     
    },
    // Your products data...
  ];

  const handleFilter = () => {
    // Add your filtering logic here
    console.log(`Filter by price: ${minPrice} - ${maxPrice}`);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="w-[350px] h-screen bg-white overflow-auto">
          <Navbar />
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

        {/* Products Section */}
        <div className="flex-1 bg-gray-100 p-4 pt-28 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <a className="relative flex h-60 w-full overflow-hidden rounded-xl" href="#">
                  <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover transition-all duration-500"
                    src={product.image1}
                    alt="product image"
                  />
                  <img
                    className="peer absolute top-0 -right-full h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
                    src={product.image2}
                    alt="product image"
                  />
                  <div className="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center">
                    <div className="rounded-full h-3 w-3 bg-gray-300 border-2 border-white"></div>
                    <div className="rounded-full h-3 w-3 bg-gray-300 border-2 border-white"></div>
                    <div className="rounded-full h-3 w-3 bg-gray-300 border-2 border-white"></div>
                  </div>
                  <svg
                    className=" pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                    />
                  </svg>
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-blue-600 px-2 text-center text-sm font-medium text-white">
                    {product.discount}
                  </span>
                </a>
                <div className=" mt-4 px-4 pb-4">
                  <div className="flex justify-between w-full h-7  mr-3">
                  <a href="#">
                    <h5 className=" text-lg font-semibold text-gray-800">{product.name}</h5>
                  </a>
                  
                  <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>
                </div>

                  <div className="mt-2 mb-4 flex items-center justify-between">
                    <p>
                      <span className="text-2xl font-bold text-gray-800">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                    </p>
                   
                  </div>
                  <button className="w-full py-2 px-4 bg-[#A9864E] text-white rounded-lg hover:bg-zinc-800 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Page;
