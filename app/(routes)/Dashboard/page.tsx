'use client'
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function JazaPerfumes() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-[#F7F3E9] min-h-screen px-6 py-12 md:px-16 space-y-16 pt-40">
      {/* Introduction Section */}
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/3 mr-32  ml-20"
        >
          <h2 className="text-4xl font-roboto size md:text-5xl  text-[#3e2723] mb-4">
            Discover the <br/>Essence of Luxury
          </h2>
          <p className="text-lg font-playfair text-[#5C5C5C] mb-6">
            Jaza Perfumes is a brand that sells high-quality, luxury, and long-lasting perfumes. We do not use any chemicals to produce our exquisite fragrances, ensuring a pure and authentic scent experience.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-[#3e2723] text-white transition-colors"
          >
            Explore
          </motion.button>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 mb-12"
        >
          <Slider {...settings}>
            {/* Slide 1 */}
            <div>
              <div className="h-60 md:h-80 w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('luxury.jpeg')` }}>
                <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl font-semibold">Discover New Scents</h2>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div>
              <div className="h-60 md:h-80 w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('redbo.jpeg')` }}>
                <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl font-semibold">Luxury in a Bottle</h2>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div>
              <div className="h-60 md:h-80 w-full rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('gold.jpeg')` }}>
                <div className="h-full w-full flex items-center justify-center bg-black bg-opacity-40">
                  <h2 className="text-white text-2xl md:text-4xl font-semibold">Gift a Unique Aroma</h2>
                </div>
              </div>
            </div>
          </Slider>
        </motion.div>
      </div>

      {/* Highlight Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">No Harmful Chemicals</h3>
          <img src="./nochemi.jpg" alt="No Harmful Chemicals" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            Our fragrances are free from harmful chemicals, ensuring safe and luxurious scents.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">Sustainable Ingredients</h3>
          <img src="./ingredients.jpg" alt="Sustainable Ingredients" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            We use sustainable, eco-friendly ingredients to create unique fragrances that you can feel good about.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-[#3e2723]">Cruelty-Free Products</h3>
          <img src="./nature.jpg" alt="Cruelty-Free Products" className="mt-4 h-60 w-full object-cover rounded" />
          <p className="text-[#5C5C5C] mt-2">
            All our products are cruelty-free, ethically sourced, and produced without animal testing.
          </p>
        </div>
      </motion.div>

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e2723]">
          A Fragrance for Every Moment
        </h2>
        <p className="mt-4 text-lg text-[#5C5C5C]">
          Whether you're looking for a subtle daytime scent or a bold evening perfume, Jaza Perfumes has something for every occasion.
        </p>
      </motion.div>

      {/* Final Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center py-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-[#3e2723]">
          Ready to Experience Luxury?
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 px-6 py-2 bg-[#3e2723] text-white rounded-md hover:bg-[#5e3a2b] transition-colors"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </div>
  );
}
