'use client';
import { useState } from "react";
import { Trash, ArrowLeft } from 'react-feather';
import Navbar from "@/app/Components/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chanel No. 5",
      description: "Luxury Women's Perfume",
      price: 229.0,
      quantity: 1,
      image: "/images/chanel-no-5.jpg",
    },
    {
      id: 2,
      name: "Dior Sauvage",
      description: "Men's Eau de Parfum",
      price: 130.0,
      quantity: 1,
      image: "/images/dior-sauvage.jpg",
    },
    {
      id: 3,
      name: "Tom Ford Oud Wood",
      description: "Unisex Fragrance",
      price: 150.0,
      quantity: 1,
      image: "/images/tom-ford-oud.jpg",
    },
    {
      id: 4,
      name: "Gucci Bloom",
      description: "Women's Eau de Parfum",
      price: 160.0,
      quantity: 2,
      image: "/images/gucci-bloom.jpg",
    },
    {
      id: 5,
      name: "Jo Malone Peony & Blush Suede",
      description: "Luxury Unisex Cologne",
      price: 100.0,
      quantity: 1,
      image: "/images/jo-malone-peony.jpg",
    },
  ]);

  const handleQuantityChange = (itemId: any, newQuantity: any) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: any) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const getTotalCost = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
  
    <div className="min-h-screen flex flex-col lg:flex-row bg-white p-4 lg:p-8 pt-8 lg:pt-28">

      {/* Back to Store Button */}
      <div className="mb-6">
        <a href="./Store">
        <button className="flex items-center text-sm sm:text-base text-black font-medium transition">
          <ArrowLeft className="mr-2 h-5 w-5" />
        </button>
        </a>
      </div>

      {/* Cart Items Section */}
      <div className="w-full lg:w-3/5 bg-gray-100 shadow-md rounded-lg p-4 sm:p-6 lg:mr-6 mb-6 lg:mb-0">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black">Shopping Cart</h2>
        <div className="space-y-4 sm:space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between border-b border-gray-300 pb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-black">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-800 rounded-l-md"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, Number(e.target.value))
                    }
                    className="w-8 sm:w-10 text-center text-black bg-white border-none outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="px-2 sm:px-3 py-1 bg-gray-200 text-gray-800 rounded-r-md"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-black">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Order Summary Section */}
<div className="w-full lg:w-2/5 bg-black text-white shadow-md rounded-lg p-4 sm:p-6">
  {/* Shipping Address Section */}
  <div className="mb-6">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Shipping Address</h2>
    <div className="space-y-2">
      {/* Default Address */}
      <div className="bg-gray-900 p-3 rounded-md">
        <p className="font-semibold">John Doe</p>
        <p>1234 Main Street</p>
        <p>City, State, 12345</p>
      </div>

      {/* Add/Change Address Button */}
      <button className="w-full mt-2 bg-white text-black py-2 rounded-md hover:bg-gray-300 transition">
        Add/Change Address
      </button>
    </div>
  </div>

  {/* Order Summary Section */}
  <h2 className="text-xl sm:text-2xl font-semibold mb-4">Order Summary</h2>
  <div className="space-y-4">
    <div className="flex justify-between">
      <span className="text-gray-300">Subtotal</span>
      <span className="font-semibold text-white">₹{getTotalCost()}</span>
    </div>

    {/* Shipping Options */}
    <div className="flex justify-between items-center">
      <span className="text-gray-300">Shipping</span>
      <select className="bg-black text-gray-300 border border-gray-600 rounded-md p-2">
        <option>USPS (₹9.00)</option>
        <option>FedEx (₹12.00)</option>
      </select>
    </div>

    {/* Promo Code */}
    <div className="flex flex-col">
      <label htmlFor="promo-code" className="text-gray-300">
        Promo Code
      </label>
      <input
        type="text"
        id="promo-code"
        placeholder="Enter promo code"
        className="mt-2 p-2 bg-gray-900 text-white border border-gray-600 rounded-md"
      />
    </div>
  </div>

  {/* Total Cost */}
  <div className="border-t border-gray-700 mt-6 pt-4">
    <div className="flex justify-between">
      <span className="text-gray-300">Total Cost</span>
      <span className="font-semibold text-white">
        ₹{(parseFloat(getTotalCost()) + 9).toFixed(2)}
      </span>
    </div>
  </div>

  {/* Payment Options */}
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-2">Payment Options</h3>
    <div className="space-y-3">
      {/* GPay */}
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="form-radio text-gray-300" />
        <span className="ml-2">GPay</span>
      </label>

      {/* PhonePe */}
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="form-radio text-gray-300" />
        <span className="ml-2">PhonePe</span>
      </label>

      {/* UPI ID */}
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="form-radio text-gray-300" />
        <span className="ml-2">UPI ID</span>
      </label>

      {/* Cash on Delivery */}
      <label className="flex items-center">
        <input type="radio" name="payment-method" className="form-radio text-gray-300" />
        <span className="ml-2">Cash on Delivery</span>
      </label>
    </div>
  </div>

  {/* Checkout Button */}
  <button className="w-full mt-6 bg-white text-black py-3 rounded-md hover:bg-gray-300 transition">
    Checkout
  </button>
</div>

    </div>
    </>
  );
};

export default Cart;
