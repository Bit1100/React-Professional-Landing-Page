export type OfferCount = {
  textContent: string;
  dataset: {
    count: number;
  };
};

// Update the Offer on Intersection
export const DealManipulator = (
  dealRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (dealRef.current.lastElementChild) {
    const counterChildren = Array.from(
      dealRef.current.lastElementChild.children
    );

    counterChildren?.forEach((counter) => {
      // Type Assertion as HTMLElement has no dataset property by default
      const dataset = (counter.firstElementChild as HTMLElement).dataset;

      const offerCount: Element | null = counter.firstElementChild;

      if (offerCount) {
        offerCount.textContent = "0";
        const target = parseInt(dataset.count || "");

        const step = 0.3;
        const countIt = () => {
          const counted = parseInt(offerCount.textContent || "0");
          if (counted < target) {
            offerCount.textContent = "" + Math.ceil(counted + step);
            window.setTimeout(countIt, 100);
          } else {
            offerCount.textContent = target.toString();
          }
        };
        countIt();
      }
    });
  }
};
