import React from "react";
import Image from "../Layout/Image";

const SiteContentTop = () => {
  return (
    <>
      <header className="top">
        <div className="container flex justify-between items-center">
          <div className="left flex justify-center items-center">
            <a
              rel="noreferrer noopener"
              href="www.facebook.com"
              target="_blank"
            >
              <Image name="fb.svg" altText="Social Media Icons" />
            </a>
            <a
              rel="noreferrer noopener"
              href="www.instagram.com"
              target="_blank"
            >
              <Image name="insta.svg" altText="Social Media Icons" />
            </a>
            <a rel="noreferrer noopener" href="www.twitter.com" target="_blank">
              <Image name="twitter.svg" altText="Social Media Icons" />
            </a>
            <a rel="noreferrer noopener" href="www.gmail.com" target="_blank">
              <Image name="gmail.svg" altText="Social Media Icons" />
            </a>
          </div>
          <div className="right flex justify-center items-center">
            <div>
              <Image name="user.svg" altText="User" />
              <span>Login</span>
            </div>
            <span>|</span>
            <div>
              <Image name="user2.svg" altText="Register" />
              <span>Register Now</span>
            </div>
            <span>|</span>
            <div>
              <Image name="cart.png" altText="Cart" />
              <span>0 items - ₹ 0.0</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default SiteContentTop;
