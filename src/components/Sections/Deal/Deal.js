import React, { useState, useEffect } from "react";
import SectionHeading from "../../Layout/SectionHeading";
import DealCard from "./DealCard";
import axios from "axios";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import { DealManipulator } from "../../../utils/DealManipulator";
import { useData } from "../../Layout/Global";

const Deal = () => {
  const { dealRef } = useData();
  const [deals, setDeals] = useState([]);
  const isIntersected = useIntersectionObserver(dealRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.05,
  });

  useEffect(() => {
    const fetchDeals = async () => {
      const response = await axios.get("http://localhost:3001/api/deals");

      setDeals(response.data);
    };

    fetchDeals();
  }, []);

  // Execute the manipulator fn on intersecting
  useEffect(() => {
    if (isIntersected) {
      DealManipulator(dealRef);
    }
  }, [dealRef, isIntersected]);

  return (
    <section ref={dealRef} className="deal" id="deal">
      <SectionHeading heading="Deals of the Week" />
      <div className="container flex justify-center wrap items-center">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </section>
  );
};

export default Deal;
