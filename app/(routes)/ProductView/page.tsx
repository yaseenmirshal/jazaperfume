'use client'
import React, { useState } from "react";
import Navbar from "@/app/Components/Navbar";

const ProductView = () => {
  // State for managing the quantity
  const [quantity, setQuantity] = useState(1);

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease the quantity, ensuring it doesn't go below 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add to Cart handler
  const addToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
  };

  // Buy Now handler
  const buyNow = () => {
    console.log(`Proceeding to buy ${quantity} item(s)`);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 p-6 bg-[#f4f4f4] min-h-screen">
        {/* Product Image */}
        <div className="flex-1">
          <div className="w-full h-[400px] mt-20 md:w-[500px] bg-[#f7f7f7] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/500"
              alt="Lavendour Oud"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl font-bold text-[#333333] mb-2">Lavendour Oud</h1>
          <p className="text-md text-[#555555] mb-4 leading-relaxed">
            Oud Lavendour is a unisex fragrance that exudes sophistication, perfect for those who enjoy luxury and indulging in themselves.
          </p>

          {/* Quantity and Price Row */}
          <div className="flex items-center justify-between mb-6">
            {/* Price */}
            <div className="text-3xl font-bold text-[#2E2E2E]">
              ₹{(1199 * quantity)}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseQuantity}
                className="bg-[#eaeaea] text-[#333333] w-10 h-10 rounded-full flex items-center justify-center border border-gray-300"
              >
                -
              </button>
              <span className="text-xl text-black font-semibold">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="bg-[#eaeaea] text-[#333333] w-10 h-10 rounded-full flex items-center justify-center border border-gray-300"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex gap-4 mb-6">
            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="flex-1 px-6 py-3 bg-[#6C63FF] text-white font-semibold rounded-md shadow-md hover:bg-[#5851DB] transition-all duration-300"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              onClick={buyNow}
              className="flex-1 px-6 py-3 bg-[#FF5A5F] text-white font-semibold rounded-md shadow-md hover:bg-[#FF414D] transition-all duration-300"
            >
              Buy Now
            </button>
          </div>

          {/* Product Description */}
          <div className="text-[#666666] mt-6">
            <h2 className="text-xl font-semibold mb-2 text-[#333333]">Product Description</h2>
            <p className="text-base leading-relaxed">
              The hints of leather and lavender are rich and intoxicating. Recommended wear: Can be worn for many occasions, day-to-day, special events, dates, and evenings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
