import { useState, useEffect } from "react";
import { IOOptionsType, IOEntryType } from "../types";

export const useIntersectionObserver = (
  ref: React.MutableRefObject<HTMLDivElement>,
  options: IOOptionsType
) => {
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    // Handle Observation
    const handleObserve = (entries: IOEntryType[]) => {
      entries.forEach((entry: IOEntryType) => {
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
