// Updating the Offer on Intersection
export const DealManipulator = (dealRef) => {
  const counters = Array.from(dealRef.current.lastElementChild.children);
  counters.forEach((counter) => {
    const offerCount = counter.firstElementChild;

    offerCount.innerText = 0;

    const target = +offerCount.dataset.count;

    const step = 0.3;

    const countIt = () => {
      const counted = +offerCount.innerText;
      if (counted < target) {
        offerCount.innerText = "" + Math.ceil(counted + step);
        setTimeout(countIt, 100);
      } else {
        offerCount.innerText = target;
      }
    };
    countIt();
  });
};
