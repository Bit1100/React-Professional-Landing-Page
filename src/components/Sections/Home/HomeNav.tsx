import { NavLink } from "react-router-dom";
import Image from "../../Layout/Image";
import { useAppContext } from "../../../context";

const SiteContentNav = () => {
  const {
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

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <Image name="call.png" altText="Call Us" />
            </div>
            <div className="flex flex-col">
              <span>Call Us: (+91) 123-456-7890</span>
              <span>E-mail: support@freshfruit.com</span>
            </div>
          </div>
          <div>
            <span className="slogan">Fresh Fruits</span>
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
        <div className="container navigation flex justify-center items-center">
          <ul className="flex justify-between items-center">
            <li>
              <NavLink onClick={() => handleScroll(homeRef.current)} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(aboutRef.current)}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(fruitsRef.current)}
                to="/fruits"
              >
                Fruits
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => handleScroll(blogRef.current)} to="/blog">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => handleScroll(dealRef.current)} to="/deal">
                Deals
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(serviceRef.current)}
                to="/service"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(subscribeRef.current)}
                to="/subscribe"
              >
                Subscribe
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => handleScroll(contactRef.current)}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SiteContentNav;
