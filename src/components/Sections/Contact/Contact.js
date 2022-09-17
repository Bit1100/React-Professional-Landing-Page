import React from "react";
import ContactDetail from "./ContactDetail";
import Map from "./Map";
import { useData } from "../../Layout/Global";

const Contact = () => {
  const { contactRef } = useData();
  return (
    <section
      ref={contactRef}
      className="contact flex wrap justify-center"
      id="contact"
    >
      <ContactDetail />
      <Map />
    </section>
  );
};

export default Contact;
