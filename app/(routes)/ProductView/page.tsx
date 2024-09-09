// import Sneakers from "./Sneakers";
// import Header from "./Header";
'use client' 
import { useState, useEffect, useRef } from "react";
import cartImg from "../images/img1-icon.jpg";
const Herosec = () => {
  const [items, setItems] = useState(0);
  const [cart, setCart] = useState(0);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const shadowRef = useRef(null);
  const shadowFu = function () {
    return shadowRef.current;
  };

  // useEffect(() => {
  //   if (cart == 0) {
  //     myRef1.current.style.display = "none";
  //     myRef2.current.style.display = "none";
  //     myRef3.current.style.display = "block";
  //   } else {
  //     myRef1.current.style.display = "flex";
  //     myRef2.current.style.display = "block";
  //     myRef3.current.style.display = "none";
  //   }
  //   // console.log(shadowRef.current);
  // });

  return (
    <div className="hero-sec content-div">
      {/* <Header cartItems={[cart, shadowFu]} /> */}
      <div ref={shadowRef} className="shadow"></div>
      <div className="cart-box">
        <span className="cart-para cart-heading">
          Cart
          <hr className="cart-hr" />
        </span>

        <p ref={myRef3} className="cart-para empty-para">
          Your cart is empty.
        </p>
        <div ref={myRef1} className="cart-item-div">
          <div className="cart-item-col1">
            <img  className="cart-item-img" />
          </div>
          <div className="cart-item-col2">
            <p className="cart-para">
              Fall Limited Edition Sneakers $125.00 x {cart}{" "}
              <span className="item-amount">${125 * cart}.00</span>
            </p>
          </div>
          <div className="cart-item-col3">
            <svg
              className="cart-del"
              onClick={() => {
                setCart(cart - 1);
              }}
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a"
                />
              </defs>
              <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </div>
        </div>
        <div ref={myRef2} className="checkout-div">
          <button className="checkout-btn">checkout</button>
        </div>
      </div>
      <div className="hero-row">
        <div className="hero-col hero-col1">
          {/* <Sneakers /> */}
        </div>
        <div className="hero-col hero-col2">
          <div className="col2-wrapper">
            <h4 className="hero-subHeading">SNEAKER COMPANY</h4>
            <h1 className="main-heading">Fall Limited Edition Sneakers</h1>
            <p className="hero-para">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole,they'll withstand everything
              the weather can offer.
            </p>
            <span className="dollar">$125.00</span>
            <span className="discount hero-subHeading">50%</span>
            <del className="discount2 hero-para">$250.00</del>
            <div className="cart2-sec">
              <div className="cart2-col cart2-col1">
                {/* <button className="minus">-</button> */}
                {/* <svg
                  onClick={() => {
                    let count = items - 1;
                    if (count < 1) {
                      count = 0;
                    }
                    setItems(count);
                  }}
                  className="minus"
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                </svg> */}
                <span
                  className="minus"
                  onClick={() => {
                    let count = items - 1;
                    if (count < 1) {
                      count = 0;
                    }
                    setItems(count);
                  }}
                ></span>

                <span className="cart2-values">{items}</span>
                <svg
                  onClick={() => {
                    let count = items + 1;
                    setItems(count);
                  }}
                  className="plus"
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#b" />
                </svg>
              </div>
              <div className="cart2-col cart2-col2">
                <button
                  className="cart2-btn"
                  onClick={() => {
                    if (items == 0) {
                      alert("Please First add the items");
                    } else {
                      setCart(items);
                      setItems(0);
                    }
                  }}
                >
                  <svg
                    className="cart2-main"
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    />
                  </svg>
                  <span className="cart2-text">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;