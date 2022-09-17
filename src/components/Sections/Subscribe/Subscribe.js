import React from "react";
import SubscribeDetail from "./SubscribeDetail";
import { useData } from "../../Layout/Global";

const Subscribe = () => {
  const { subscribeRef } = useData();
  return (
    <section ref={subscribeRef} className="subscribe" id="subscribe">
      <div className="container flex justify-between items-center wrap">
        <SubscribeDetail />
      </div>
    </section>
  );
};

export default Subscribe;
