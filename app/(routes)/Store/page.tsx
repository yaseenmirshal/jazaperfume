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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '
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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves.'

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

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
      description:'OUD LAVENDER is a unisex fragrance that exudes sophistication, and is perfect for those that enjoy luxury and indulging in themselves. '

     
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
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:p-4">
        {products.map((product) => (
          <Link href="/ProductView" key={product.id} legacyBehavior>
            <a className="block">
              <div
                className="relative flex flex-col overflow-hidden border border-gray-200 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-60 overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform group-hover:rotate-y-180">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image1}
                      alt={product.name}
                    />
                  </div>
                  <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform rotate-y-180 group-hover:rotate-y-0">
                    <img
                      className="w-full h-full object-cover"
                      src={product.image2}
                      alt={product.name}
                    />
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-2 md:p-4 flex flex-col justify-between h-full">
                  <div>
                    <h5 className="text-sm md:text-lg font-semibold text-gray-800">{product.name}</h5>
                    <p className="mt-1 md:mt-2 mb-2 md:mb-4 text-xs md:text-sm text-gray-600">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm md:text-2xl font-bold text-gray-800">
                        ₹{product.price}
                        <span className="text-xs md:text-sm text-gray-500 line-through ml-2">
                          ₹{product.originalPrice}
                        </span>
                      </p>
                      <span className="bg-blue-600 text-white text-xs md:text-sm px-2 py-1 rounded-full">
                        {product.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
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
