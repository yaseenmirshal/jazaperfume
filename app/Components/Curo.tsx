// components/Carousel.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Curo = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Carousel
        showArrows={false} // Hide default arrows
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Interval for auto sliding (3000ms = 3 seconds)
        showThumbs={false}
        showStatus={false}
        transitionTime={500} // Transition time between slides in milliseconds (500ms = 0.5 seconds)
        swipeScrollTolerance={50} // Amount of pixels needed to swipe for the next slide
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            key={index}
            style={{
              background: isSelected ? '#8B4513' : '#F5F5DC',
              width: 10,
              height: 10,
              margin: '0 5px',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            aria-label={`Go to slide ${index + 1}`}
            title={label}
          />
        )}
      >
        <div className="relative">
          <img
            src="https://i.pinimg.com/564x/8f/5d/22/8f5d22b85d02d3bb78ea57b70962cc46.jpg"
            alt="Perfume 1"
            className="w-full h-auto rounded-t-lg object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-white text-center">
            <p className="font-semibold text-lg">Perfume 1</p>
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.pinimg.com/564x/8d/9d/21/8d9d2197288602db24289822f44bec9c.jpg"
            alt="Perfume 2"
            className="w-full h-auto rounded-t-lg object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-white text-center">
            <p className="font-semibold text-lg">Perfume 2</p>
            <p className="text-xs">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://i.pinimg.com/564x/3c/59/9f/3c599f1b6fa094fc89005c0d90ceaf52.jpg"
            alt="Perfume 3"
            className="w-full h-auto rounded-t-lg object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-white text-center">
            <p className="font-semibold text-lg">Perfume 3</p>
            <p className="text-xs">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default Curo;
