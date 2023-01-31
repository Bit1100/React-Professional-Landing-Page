import Image from "../Layout/Image";
import { useAppContext } from "../../context";

const NavTrigger = () => {
  const {
    state: { isScaled },
    dispatch,
  } = useAppContext();
  return (
    <div className="nav-trigger">
      <Image
        name="rightArrow.svg"
        altText="Hamburger icon"
        className={isScaled ? "img-rotate" : "img"}
        width="40px"
        height="40px"
        onClick={() => dispatch({ type: "SIDEBAR_ISSCALED" })}
      />
    </div>
  );
};

export default NavTrigger;
