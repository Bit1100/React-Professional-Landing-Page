import { ImageType } from "../../types";

const Image = ({ name, altText, ...props }: ImageType) => {
  try {
    const img = require(`../../assets/images/${name}`);

    if (!img) {
      return null;
    }
    return <img src={img} alt={altText} {...props} />;
  } catch (error) {
    console.log(`Image with ${name} not found!`);
    return null;
  }
};

export default Image;
