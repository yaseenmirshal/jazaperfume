import { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    "./3.png",
    "./4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className='block lg:hidden mt-20 w-full h-44 relative overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute  bg-slate-500 inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out`}
            style={{ opacity: currentIndex === index ? 1 : 0 }} // Change to 1 for debugging
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto" // Ensure the image covers the entire space
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
