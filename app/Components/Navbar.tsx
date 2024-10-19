"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { ShoppingCartIcon } from "@heroicons/react/outline"; 
import {
  faUser,
  faHeart,
  faShoppingCart,
  faShoppingBag,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Musk Rijal", price: 50, quantity: 1, img: "/luxury.jpeg" },
    { id: 2, name: "Velvet Oud", price: 70, quantity: 2, img: "/gold.jpeg" },
    { id: 3, name: "Red Spain", price: 60, quantity: 1, img: "/redbo.jpeg" },
  ]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <header
        className={`fixed top-0 w-full shadow-lg transition transform translate-y-0 duration-500 ease-in-out z-50`}
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <div className="mx-auto px-4 max-h-20">
          <div className="flex justify-between items-center max-h-20">
            <div className="flex items-center">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                  <img
                    className="h-14 mt-5 mb-5"
                    src="./jaza white.png"
                    alt="Jaza Perfumes Logo"
                  />
                </a>
              </Link>
            </div>
            <div className="hidden md:flex justify-center flex-grow space-x-10 max-h-20">
              <Link href="/" legacyBehavior>
                <a
                  className="py-4 px-2 text-ivory border-black font-semibold"
                  style={{ color: "#000000" }}
                  onClick={() => setIsOpen(false)} // Close the menu
                >
                  HOME
                </a>
              </Link>
              <Link href="#about" legacyBehavior>
                <a
                  className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300"
                  style={{ color: "#000000" }}
                  onClick={() => setIsOpen(false)} // Close the menu
                >
                  ABOUT
                </a>
              </Link>
              <Link href="#contact" legacyBehavior>
                <a
                  className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300"
                  style={{ color: "#000000" }}
                  onClick={() => setIsOpen(false)} // Close the menu
                >
                  CONTACT
                </a>
              </Link>
              <Link href="/Store" legacyBehavior>
                <a
                  className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300"
                  style={{ color: "#000000" }}
                  onClick={() => setIsOpen(false)} // Close the menu
                >
                  STORE
                </a>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-9 mr-5">
              <Link href="/Liked">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-black hover:text-richGold cursor-pointer"
                />
              </Link>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-black hover:text-richGold cursor-pointer"
                onClick={() => setIsCartOpen(true)} // Open the cart modal
              />
              <Link href="/Signup">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-black hover:text-richGold cursor-pointer"
                />
              </Link>
            </div>

            <div className="md:hidden flex items-center">
            <div className="md:hidden flex items-center">
  <Link href="/Store" legacyBehavior>
    <a className="p-4 mr-4 hover:text-richGold transition duration-300" onClick={() => setIsOpen(false)}>
      <FontAwesomeIcon icon={faShoppingBag} className="text-black text-lg" />
    </a>
  </Link>
</div>
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6 text-slate-950 hover:text-richGold"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden flex flex-col ${isOpen ? "block" : "hidden"}`}
          style={{ backgroundColor: "#ffffff" }}
        >
          <Link href="/" legacyBehavior>
            <a
              className="block text-center text-sm px-2 py-4 text-ivory font-semibold"
              style={{ color: "#000000" }}
              onClick={() => setIsOpen(false)} // Close the menu
            >
              HOME
            </a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a
              className="block text-center text-sm px-2 py-4 hover:text-richGold transition duration-300"
              style={{ color: "#000000" }}
              onClick={() => setIsOpen(false)} // Close the menu
            >
              ABOUT
            </a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a
              className="block text-center text-sm px-2 py-4 hover:text-richGold transition duration-300"
              style={{ color: "#000000" }}
              onClick={() => setIsOpen(false)} // Close the menu
            >
              CONTACT
            </a>
          </Link>
          <div className="flex items-center justify-around py-4">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-black hover:text-richGold cursor-pointer"
              onClick={() => setIsOpen(false)} // Close the menu
            />
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-black hover:text-richGold cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            />
            <Link href="/Signup">
              <FontAwesomeIcon
                icon={faUser}
                className="text-black hover:text-richGold cursor-pointer"
                onClick={() => setIsOpen(false)} // Close the menu
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-80 h-full shadow-lg p-6 overflow-y-auto transform transition-transform duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-black">Your Cart</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="text-black hover:text-gold cursor-pointer"
                onClick={() => setIsCartOpen(false)}
              />
            </div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.img} alt={item.name} className="h-16 w-16 mr-4" />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} className="text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
