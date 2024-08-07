import React from 'react';

interface ProductViewProps {
  image: string;
  title: string;
  description: string;
  price: string;
  details: string;
}

const ProductView: React.FC<ProductViewProps> = ({ image, title, description, price, details }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img src={image} alt={title} className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
        
        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          
          {/* Price */}
          <p className="text-2xl text-gray-800 mb-4">{price}</p>
          
          {/* Description */}
          <p className="text-lg text-gray-700 mb-6">{description}</p>
          
          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mb-4">
            Add to Cart
          </button>
          
          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
            <p className="text-lg text-gray-700">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
