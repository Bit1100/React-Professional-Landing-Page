import React from "react";
import Image from "../../Layout/Image";

const SubscribeDetail = () => {
  return (
    <>
      <div className="left flex1">
        <Image name="epineapple.png" altText="Fruit" />
      </div>
      <div className="right flex1">
        <h3>Subscribe to our Newsletter</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae id
          nostrum porro aliquid facere voluptates nobis tempora distinctio
          voluptatibus autem, velit error similique, magni harum possimus
          recusandae asperiores perferendis ab!
        </p>
        <div className="flex items-center">
          <input type="email" placeholder="xyz@gmail.com" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default SubscribeDetail;
