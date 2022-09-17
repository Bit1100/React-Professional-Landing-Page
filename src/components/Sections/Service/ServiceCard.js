import React from "react";
import Image from "../../Layout/Image";

const ServiceCard = ({ service }) => {
  const { image, title, description } = service;
  return (
    <div className="card flex flex-col justify-center">
      <div>
        <Image name={image} altText="Service Icons" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn btn-secondary">Read More</button>
    </div>
  );
};

export default ServiceCard;
