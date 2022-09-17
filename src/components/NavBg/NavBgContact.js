import React from "react";
import Image from "../Layout/Image";

const NavBgContact = () => {
  return (
    <div className="third">
      <div className="flex items-center">
        <div>
          <Image name="call.png" altText="Call Us" />
        </div>
        <div className="flex flex-col">
          <span>Call Us: (+91) 123-456-7890</span>
          <span>E-mail: support@freshfruit.com</span>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Image name="clock.png" altText="Working hours" />
        </div>
        <div className="flex flex-col">
          <span>Working Hours:</span>
          <span>Mon-Sat (8:00am - 8:00pm)</span>
        </div>
      </div>
    </div>
  );
};

export default NavBgContact;
