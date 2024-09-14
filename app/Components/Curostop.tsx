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
    <div className='block lg:hidden w-full h-auto md:h-80 justify-center p-0 bg-white'>
      <div className="relative w-full h-auto overflow-hidden ">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-auto mt-[80px] flex items-center justify-center flex-shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
       
      </div>
    </div>

    <div>


    </div>
    </>
  );
};

export default Carousel;
