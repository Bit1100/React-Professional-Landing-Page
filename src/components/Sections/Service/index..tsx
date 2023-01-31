import SectionHeading from "../../Layout/SectionHeading";
import ServiceCard from "./ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../../../context";
import { ServiceType } from "../../../types";

const Service = () => {
  const { serviceRef } = useAppContext();
  const [services, setServices] = useState<ServiceType[] | []>([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_REMOTE_API_BASEURL}/services.json`
      );

      setServices(response.data.services);
    };

    fetchServices();
  }, []);

  return (
    <section ref={serviceRef} className="service" id="service">
      <SectionHeading heading="Our Services" />
      <div className="container flex items-center justify-between">
        {services.map((service) => (
          <ServiceCard key={service.id.toString()} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
