import React from "react";
import Image from "../Layout/Image";
import { useData } from "../Layout/Global";

const NavTrigger = () => {
  const { isScaled, setIsScaled } = useData();
  return (
    <div className="nav-trigger">
      <Image
        name="rightArrow.svg"
        altText="Hamburger icon"
        className={isScaled ? "img-rotate" : "img"}
        width="40px"
        height="40px"
        onClick={() => setIsScaled((prevState) => !prevState)}
      />
    </div>
  );
};

export default NavTrigger;
