'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header
      className={`fixed top-0 w-full   shadow-lg transition transform ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } duration-500 ease-in-out z-50`}
      style={{  
        backgroundColor: 'white', // Semi-transparent background color
        // backdropFilter: 'blur(10px)', // Blur effect
        // WebkitBackdropFilter: 'blur(10px)', // Safari support
        // borderBottom: '1px solid rgba(255, 255, 255, 0.18)', // Light border to enhance the glass effect
        // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' // Subtle shadow for depth
      }}
    >
      <div className="mx-auto px-4 max-h-20">
        <div className="flex justify-between items-center max-h-20">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <img className='h-14 mt-5 mb-5' src="./jaza white.png" alt="Jaza Perfumes Logo" />
              </a>
            </Link>
          </div>
          <div className="hidden md:flex justify-center flex-grow space-x-10 max-h-20">
            <Link href="/" legacyBehavior>
              <a className="py-4 px-2 text-ivory border-b-4 border-ivory font-semibold" style={{ color: '#FFFFF0' }}>HOME</a>
            </Link>
            <Link href="/About" legacyBehavior>
              <a className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300" style={{ color: '#D3D3D3' }}>ABOUT</a>
            </Link>
            <Link href="/Contact" legacyBehavior>
              <a className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300" style={{ color: '#D3D3D3' }}>CONTACT</a>
            </Link>
            <Link href="/Store" legacyBehavior>
              <a className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300" style={{ color: '#D3D3D3' }}>STORE</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className="py-4 px-2 text-lightGray font-semibold hover:text-richGold transition duration-300" style={{ color: '#D3D3D3' }}>CATEGORIES</a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-9 mr-5">
            <FontAwesomeIcon icon={faHeart} className="text-lightGray hover:text-richGold cursor-pointer" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-lightGray hover:text-richGold cursor-pointer" />
            <Link href="/Signup"><FontAwesomeIcon icon={faUser} className="text-lightGray hover:text-richGold cursor-pointer" /></Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-black hover:text-richGold"
                x-show="!isOpen"
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

      <div  className={`md:hidden flex  flex-col    ${isOpen ? "block" : "hidden"}`} style={{ backgroundColor: 'white' }}>
        <Link href="/" legacyBehavior>
          <a className="block text-center  text-sm px-2 py-4 text-ivory font-semibold" style={{ color: 'black' }}>HOME</a>
        </Link>
        <Link href="/About" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-richGold transition duration-300" style={{ color: 'blacK' }}>ABOUT</a>
        </Link>
        <Link href="/Store" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-richGold transition duration-300" style={{ color: 'BLACK' }}>STORE</a>
        </Link>
        <Link href="/Contact" legacyBehavior>
          <a className="block text-sm px-2 py-4 hover:text-richGold transition duration-300" style={{ color: 'black' }}>CONTACT</a>
        </Link>
        <div className="flex items-center justify-around py-4">
          <FontAwesomeIcon icon={faHeart} className="text-black hover:text-richGold cursor-pointer" />
          <FontAwesomeIcon icon={faShoppingCart} className="text-black hover:text-richGold cursor-pointer" />
          <Link href="/Signup">
           <FontAwesomeIcon icon={faUser} className="text-black hover:text-richGold cursor-pointer" /> 
            </Link>
        </div>
       
      </div>

    </header>
  );
};

export default Navbar;
