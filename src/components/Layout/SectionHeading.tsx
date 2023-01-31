import { HeadingType } from "../../types";

const SectionHeading = ({ heading }: HeadingType) => {
  return <h2 className="section-heading">{heading}</h2>;
};

export default SectionHeading;
