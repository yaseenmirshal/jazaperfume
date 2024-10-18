"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const NavbarStore = () => {
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
           
         
            <Link href="/">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-lg text-black" />
            </Link>
          </div>
        </div>
      </header>

    </>
  );
};

export default NavbarStore;
