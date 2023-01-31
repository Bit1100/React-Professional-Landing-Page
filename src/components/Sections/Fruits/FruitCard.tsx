import Image from "../../Layout/Image";
import { FruitsType } from "../../../types";

const Card = ({ fruit }: FruitsType) => {
  const { name, image, price, stars } = fruit;

  const createStars = (stars: number) => {
    const starArr = [];
    for (let i = 0; i < stars; i++) {
      starArr.push(i);
    }
    return starArr;
  };

  return (
    <div className="card flex flex-col">
      <div className="top flex justify-center items-center">
        <Image name={image} altText={name} />
      </div>
      <hr />
      <div className="bottom flex flex-col justify-center items-center">
        <h3>{name}</h3>
        <div>
          {createStars(stars).map((starId) => {
            return <Image name="star.png" altText="Star" key={starId} />;
          })}
        </div>
        <div className="price">₹ {price}/kg</div>
        <div className="add-to-cart flex justify-between items-center">
          <Image name="cart.png" altText="Cart" className="flex1" />
          <span className="flex2">Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
