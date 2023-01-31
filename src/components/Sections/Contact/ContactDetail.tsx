import Image from "../../Layout/Image";

const ContactDetail = () => {
  return (
    <div className="form-wrapper flex1 flex flex-col justify-center items-center">
      <div className="outer flex flex-col items-center justify-center">
        <h2 className="section-heading">Contact Us</h2>
        <div className="inner">
          <div className="flex items-center">
            <Image name="call.png" altText="Contact" />
            <div className="flex flex-col">
              <span>Call Us</span>
              <span>(+91)-123-456-7890</span>
            </div>
          </div>
          <div className="flex items-center">
            <Image name="gmail.svg" altText="Contact" />
            <div className="flex flex-col">
              <span>E-mail</span>
              <span>support@freshfruit.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <Image name="clock.png" altText="Working Hours" />
            <div className="flex flex-col">
              <span>Working Hours</span>
              <span>Mon-Sat (8:00am - 8:00pm)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
