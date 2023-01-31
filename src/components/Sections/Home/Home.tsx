import Image from "../../Layout/Image";
import { useAppContext } from "../../../context";

const SiteContentHome = () => {
  const { homeRef } = useAppContext();
  return (
    <header ref={homeRef} id="home" className="hero">
      <div className="container flex-col items-center">
        <p className="greet">
          Welcome to <span>Fresh Fruits</span>
        </p>
        <h1>
          India's Best <span>Fruits Shopping</span> Website
        </h1>
        <p className="intro">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem cumque
          totam libero numquam dolor, dolorem adipisci ipsam quae. Recusandae
          facere dolores error est culpa praesentium, dolore molestiae
          blanditiis ipsum deserunt!
        </p>
        <div className="flex items-center">
          <button className="btn btn-primary">Read MOre</button>
          <button className="btn btn-secondary">Shop Now</button>
        </div>
        <div className="hero-image">
          <Image name="ebanana.png" altText="Rotating Banana Pic" />
        </div>
      </div>
    </header>
  );
};

export default SiteContentHome;
