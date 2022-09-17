import React from "react";

const Map = () => {
  return (
    <div className="map flex1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.163742521!2d76.81306667535627!3d28.647279935360057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2snp!4v1634711280163!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        title="Our Address"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
