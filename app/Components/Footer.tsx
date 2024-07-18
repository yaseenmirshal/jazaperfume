import React from 'react'

function Footer() {
  return (
    <div>
        {/* <!-- Footer container --> */}
<footer className="bg-stone-800 text-stone-300 text-center lg:text-left">
  <div className="flex items-center justify-center border-b-2 border-zinc-600 p-6 lg:justify-between">
    <div className="me-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Social network icons container --> */}
    <div className="flex justify-center">
      <a href="#!" className="me-6 text-stone-300 [&>svg]:h-6 [&>svg]:w-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
     
      <a href="#!" className="me-6 text-stone-300 [&>svg]:h-6 [&>svg]:w-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
     
    </div>
  </div>

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Jaza Perfumes Section --> */}
      <div className="">
        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
         
          Jaza Perfumes
        </h6>
        <p>
          Experience the finest selection of Arabian perfumes, crafted with the highest quality ingredients for a lasting impression.
        </p>
      </div>
      {/* <!-- Products Section --> */}
      <div className="">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Products
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">New Arrivals</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">Best Sellers</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">Gift Sets</a>
        </p>
        <p>
          <a href="#!" className="text-stone-400">Fragrance Oils</a>
        </p>
      </div>
      {/* <!-- Customer Care Section --> */}
      <div className="">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Customer Care
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">Contact Us</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">Shipping & Returns</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-stone-400">FAQs</a>
        </p>
        <p>
          <a href="#!" className="text-stone-400">Privacy Policy</a>
        </p>
      </div>
      {/* <!-- Contact Section --> */}
      <div className="">
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="me-4 h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M288 0L0 288h96v224h128V384h128v128h128V288h96L288 0zM240 112a48 48 0 1 1 48 48 48 48 0 0 1-48-48zm288 240v192H384V320H192v224H48V352L288 112 528 352z">
            </path>
          </svg>
           673572 Koduvally, Kozhikode
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="me-4 h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8L326.4 338c-4.2 3.4-9.5 5-14.9 5s-10.7-1.6-14.9-5L9.7 190.8c-6.6-5.4-8.1-15.1-3.7-22.2s15.1-8.1 22.2-3.7L256 294.6 482.8 165c7.1-4.4 16.8-2.9 22.2 3.7s2.9 16.8-3.7 22.1zM24 128h464c13.3 0 24 10.7 24 24v304c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm0 48v288h464V176H24z">
            </path>
          </svg>
          jazaperfumes@gmai.com
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="me-4 h-5 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.4-2.6-23.4 2-30 11.3l-72 96c-6.4 8.6-7.8 20.6-3.6 30.6 0 0 18 50.6-21.6 90.2s-90.2 21.6-90.2 21.6c-10 4.2-22 .8-30.6-3.6l-96-72c-9.4-6.6-13.8-18.6-11.2-30l24-104c2.8-11.6-2.6-23.4-11.4-30L24.6 18.6c-12.4-8.4-30.2-4.6-37 8.6C-7.8 31.6-7.8 48.8 8 64L196 448c8.4 12.4 25.6 12.4 38 0l352-480c14.6-15.8 8.8-37-8-49.4z">
            </path>
          </svg>
          +91 99 47 234 099 
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer