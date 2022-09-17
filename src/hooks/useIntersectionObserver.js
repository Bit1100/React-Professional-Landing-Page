import { useState, useEffect } from "react";

export const useIntersectionObserver = (ref, options) => {
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    // Handle Observation
    const handleObserve = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
        } else {
          setIsIntersected(false);
        }
      });
    };

    //  Creating an intersection Observer
    const observer = new IntersectionObserver(handleObserve, options);

    // Observing specific section
    observer.observe(ref.current);

    // Unobserve once it's done
    return () => {
      observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return isIntersected;
};
