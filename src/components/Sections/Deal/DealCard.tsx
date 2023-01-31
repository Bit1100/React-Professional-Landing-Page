import { DealsType } from "../../../types";

const DealCard = ({ deal }: DealsType) => {
  const { count, time } = deal;
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="counter" data-count={count}>
        {count}
      </h2>
      <span>{time}</span>
    </div>
  );
};

export default DealCard;
