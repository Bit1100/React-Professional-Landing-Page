import React from "react";
import SectionHeading from "../../Layout/SectionHeading";
import ServiceCard from "./ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../../Layout/Global";

const Service = () => {
  const { serviceRef } = useData();
  const [services, setServices] = useState([]);

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
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
