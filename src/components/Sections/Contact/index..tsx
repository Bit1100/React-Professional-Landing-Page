import ContactDetail from "./ContactDetail";
import Map from "./Map";
import { useAppContext } from "../../../context";

const Contact = () => {
  const { contactRef } = useAppContext();
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
