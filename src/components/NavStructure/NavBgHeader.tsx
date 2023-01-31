import Image from "../Layout/Image";

const NavBgHeader = () => {
  return (
    <div className="first">
      <h3>Fresh Fruits</h3>
      <div className="flex items-center">
        <Image name="cart.png" altText="Cart icon" />
        <span>0 items - (₹0.00)</span>
      </div>
    </div>
  );
};

export default NavBgHeader;
