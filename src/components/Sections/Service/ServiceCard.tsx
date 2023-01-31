import Image from "../../Layout/Image";
import { ServicesType } from "../../../types";

const ServiceCard = ({ service }: ServicesType) => {
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
