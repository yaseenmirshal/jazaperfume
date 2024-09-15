"use client";

import Sidebar from "./Sidebar";
import Navbar from "@/app/Components/Navbar";
import { useEffect, useState, } from "react";
import { FaSortAmountDownAlt, FaFilter } from 'react-icons/fa';
import Link from 'next/link';

function Page() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('FRAGRANCE');




  const openModal = (content:any) => {
    setModalContent(content);
    setIsModalOpen(true);
  
  };

  const closeModal = () => {
    setIsModalOpen(false);


  };

  
   

  const categories = [
    'FRAGRANCE',
    'AVAILABILITY',
    'BRAND NAME',
    'FRAGRANCE NOTES',
    'FRAGRANCE TYPE',
    'GENDER',
    'OCCASION',
    'PRICE',
    'RATING',
    'SHADES'
  ];

  const categoryDetails:any = {
    FRAGRANCE: ["Men's Fragrance (404)", "Women's Fragrance (433)", "Giftsets (116)", "Brands (1145)", "Unisex (142)"],
    AVAILABILITY: ['In Stock', 'Out of Stock'],
    'BRAND NAME': ['Brand A', 'Brand B', 'Brand C'],
   
    'FRAGRANCE NOTES': ['Top Notes', 'Middle Notes', 'Base Notes'],
    'FRAGRANCE TYPE': ['Eau de Parfum', 'Eau de Toilette'],
    GENDER: ['Male', 'Female', 'Unisex'],
    OCCASION: ['Daily Wear', 'Party', 'Office'],
    PRICE: ['Under $50', '$50 - $100', 'Over $100'],
    RATING: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    SHADES: ['Light', 'Medium', 'Dark']
  };

 

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
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar/>
        <Navbar/>
        {/* Products Section */}
        <div className="flex-1 bg-gray-100 p-4 pt-28 overflow-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <Link href="/ProductView" legacyBehavior>
      <a>
        <button className="w-full py-2 px-4 bg-[#A9864E] text-white rounded-lg hover:bg-zinc-800 transition duration-300">
          Add to Cart
        </button>
      </a>
    </Link>
                </div>
              </div>
            ))}
          
        </div>
        </div>
        </div>

        {/* Bottom bar for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-1 border-t border-gray-300 flex justify-around items-center lg:hidden">
        <button
          className="flex w-full h-full items-center justify-center py-2 px-4 text-gray-800 rounded-md"
          onClick={() => openModal('sort')}
        >
          <FaSortAmountDownAlt className="mr-2" />
          Sort
        </button>
        <div className="h-6 border-l border-gray-300"></div>
        <button
          className="flex items-center justify-center py-2 w-full h-full px-4 text-gray-800 rounded-md"
          onClick={() => openModal('filter')}
        >
          <FaFilter className="mr-2" />
          Filter
        </button>
      </div>
{/* Modal */}
<div className={`fixed inset-0 flex items-end justify-center z-50 transition-opacity ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
  <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
  <div
    className={`bg-white w-full sm:w-96 p-4 rounded-t-lg transform transition-transform duration-700 ease-in-out ${
      isModalOpen ? 'translate-y-0' : 'translate-y-full'
      
    }`}
  >
    <div className="flex justify-between items-center">
      <h2 className="text-lg text-black font-bold">
        {modalContent === 'sort' ? 'SORT BY' : 'FILTERS'}
      </h2>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
        &times;
      </button>
    </div>
    <div className="mt-4 text-black">
      {modalContent === 'sort' ? (
        <div>
          <div className="space-y-2">
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md bg-black text-white font-medium">
              Relevance
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              Best Seller
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              Price: High To Low
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              Price: Low To High
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              New Arrival
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              Featured
            </button>
            <button className="w-full text-left py-2 px-4 border border-gray-200 rounded-md">
              On Sale
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row">
          <div className="flex w-auto text-black sm:w-1/3 border-r border-gray-200">
            <div className="flex w-96 float-left h-auto">
              <div className="w-40 h-auto">
                <ul className="text-sm">
                  {categories.map((category) => (
                    <li
                      key={category}
                      className={`py-2 px-2 hover:bg-gray-900 hover:text-white cursor-pointer ${
                        selectedCategory === category ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-black text-sm w-60 sm:w-2/3 p-4">
                {categoryDetails[selectedCategory].map((detail: any, index: any) => (
                  <div key={index} className="py-1">
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    {modalContent !== 'sort' && (
      <div className="flex mt-4">
        <button
          className="py-2 mr-2 px-4 w-full bg-gray-200 text-gray-800 border-[1px] border-black rounded-md"
          onClick={closeModal}
        >
          CLOSE
        </button>
        <button className="py-2 ml-2 px-4 w-full bg-black text-white rounded-md">APPLY</button>
      </div>
    )}
  </div>
</div>

      
    </>
  );
}

export default Page;
