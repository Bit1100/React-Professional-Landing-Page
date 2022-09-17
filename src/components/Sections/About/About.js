import React from "react";
import SectionHeading from "../../Layout/SectionHeading";
import Image from "../../Layout/Image";
import { useData } from "../../Layout/Global";

const About = () => {
  const { aboutRef } = useData();
  return (
    <section ref={aboutRef} id="about" className="about">
      <SectionHeading heading="About Fresh Fruits" />
      <div className="container flex wrap justify-between items-center">
        <div className="left flex flex1 justify-center items-center">
          <Image name="emelon.png" altText="Berry" />
        </div>
        <div className="right flex1">
          <p>
            Fresh Fruits is a long established fact that makes consumer purely
            healthy.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam
            accusamus aliquam nisi labore, voluptate non nemo modi beatae amet?
            Exercitationem, nam unde ratione nostrum commodi sequi mollitia
            repudiandae doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto dignissimos recusandae porro perferendis
            dolor distinctio, voluptates voluptatibus nemo delectus architecto.
          </p>
          <button className="btn btn-secondary">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
