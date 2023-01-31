import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context";
import { IsActiveType } from "../../types";

const NavBgLinks = () => {
  const {
    dispatch,
    handleScroll,
    aboutRef,
    blogRef,
    contactRef,
    dealRef,
    fruitsRef,
    homeRef,
    serviceRef,
    subscribeRef,
  } = useAppContext();

  const navLinkStyles = ({ isActive }: IsActiveType) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  const handleScrolling = (ref: HTMLDivElement) => {
    dispatch({ type: "SIDEBAR_ISSCALED" });
    handleScroll(ref);
  };

  return (
    <div className="second">
      <ul>
        <li>
          <NavLink
            onClick={() => handleScrolling(homeRef.current)}
            style={navLinkStyles}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(fruitsRef.current)}
            style={navLinkStyles}
            to="/fruits"
          >
            Fruits
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(aboutRef.current)}
            style={navLinkStyles}
            to="/about"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(blogRef.current)}
            style={navLinkStyles}
            to="/blog"
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(dealRef.current)}
            style={navLinkStyles}
            to="/deal"
          >
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(serviceRef.current)}
            style={navLinkStyles}
            to="/service"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(subscribeRef.current)}
            style={navLinkStyles}
            to="/subscribe"
          >
            Subscribe
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(contactRef.current)}
            style={navLinkStyles}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(homeRef.current)}
            style={navLinkStyles}
            to="/home"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScrolling(homeRef.current)}
            style={navLinkStyles}
            to="/home"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBgLinks;
