import React, { useState } from "react";
import { ContextProvider, context } from "../../context/context";
import { useContext } from "react";
import { useRef } from "react";

const Global = ({ children }) => {
  const [isScaled, setIsScaled] = useState(false);

  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);
  const dealRef = useRef(null);
  const fruitsRef = useRef(null);
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const subscribeRef = useRef(null);

  // Handling the Scroll Behaviour Smoothly
  const handleScroll = (ref) => {
    ref.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "center",
    });
  };

  return (
    <ContextProvider
      value={{
        isScaled,
        setIsScaled,
        aboutRef,
        blogRef,
        contactRef,
        dealRef,
        fruitsRef,
        homeRef,
        serviceRef,
        subscribeRef,
        handleScroll,
      }}
    >
      {children}
    </ContextProvider>
  );
};

export default Global;

export const useData = () => useContext(context);
