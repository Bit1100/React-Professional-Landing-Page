import SubscribeDetail from "./SubscribeDetail";
import { useAppContext } from "../../../context";

const Subscribe = () => {
  const { subscribeRef } = useAppContext();
  return (
    <section ref={subscribeRef} className="subscribe" id="subscribe">
      <div className="container flex justify-between items-center wrap">
        <SubscribeDetail />
      </div>
    </section>
  );
};

export default Subscribe;
