import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Footer = () => {
  return (
    <footer>
      <div className="box about flex flex-col items-center">
        <h3 className="section-heading">About Us</h3>
        <p>
          It is now people are conscious about their health and they want
          something that actually makes them fit.
        </p>
        <button className="btn btn-secondary">Read More</button>
      </div>
      <div className="box links flex flex-col items-center">
        <h3 className="section-heading">Quick Links</h3>
        <div className="flex flex-col justify-between items-center">
          <Link to="#home">Home</Link>
          <Link to="#about">About Us</Link>
          <Link to="#product">Products</Link>
          <Link to="#blog">Blogs</Link>
          <Link to="#service">Services</Link>
          <Link to="#deal">Deals</Link>
          <Link to="#contact">Contact Us</Link>
          <Link to="#subscribe">Subscribe</Link>
        </div>
      </div>
      <div className="box follow flex flex-col items-center">
        <h3 className="section-heading">Follow Us</h3>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Image name="fb.svg" altText="fb" />
            <span>Facebook</span>
          </div>
          <div className="flex justify-between items-center">
            <Image name="insta.svg" altText="Insta" />
            <span>Instagram</span>
          </div>
          <div className="flex justify-between items-center">
            <Image name="twitter.svg" altText="Twitter" />
            <span>Twitter</span>
          </div>
        </div>
      </div>
      <div className="box insta">
        <h3 className="section-heading">Instagram Posts</h3>
        <div>
          <Image name="banana.jpg" altText="Fruits" />
          <Image name="cherry.jpg" altText="Fruits" />
          <Image name="pineapple.jpg" altText="Fruits" />
          <Image name="apple.jpg" altText="Fruits" />
          <Image name="avacado.jpg" altText="Fruits" />
          <Image name="berry.jpg" altText="Fruits" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
