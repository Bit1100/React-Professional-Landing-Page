import NavBgHeader from "./NavBgHeader";
import NavBgLinks from "./NavBgLinks";
import NavBgContact from "./NavBgContact";

const NavBgWrapper = () => {
  return (
    <div className="nav-bg">
      <NavBgHeader />
      <NavBgLinks />
      <NavBgContact />
    </div>
  );
};

export default NavBgWrapper;
