import React, { useState, useEffect } from "react";
import SectionHeading from "../../Layout/SectionHeading";
import FruitCard from "./FruitCard";
import axios from "axios";
import { useAppContext } from "../../../context";
import { FruitType } from "../../../types";

const Product = () => {
  const { fruitsRef } = useAppContext();
  const [fruits, setFruits] = useState<FruitType[] | []>([]);

  useEffect(() => {
    const fetchFruits = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_REMOTE_API_BASEURL}/fruits.json`
      );

      setFruits(response.data.fruits);
    };

    fetchFruits();
  }, []);

  return (
    <section ref={fruitsRef} id="fruits" className="fruits">
      <SectionHeading heading="Top Fruits" />
      <div className="container flex items-center">
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id.toString()} fruit={fruit} />
        ))}
      </div>
      <div className="btn-wrapper flex justify-center items-center">
        <button className="btn btn-secondary">View More</button>
      </div>
    </section>
  );
};

export default Product;
