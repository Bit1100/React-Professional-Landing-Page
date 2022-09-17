import React from "react";
import Image from "../../Layout/Image";

const BlogCard = ({ blog }) => {
  const { image, datePublished, author, comments, title, description } = blog;
  return (
    <div className="card">
      <div className="first">
        <Image name={image} altText="Fruits" />
      </div>
      <div className="second flex justify-between items-center">
        <span>{datePublished}</span>
        <div className="flex">
          <span>
            Posted by <strong>{author}</strong>
          </span>
          <span>{comments} Comments</span>
        </div>
      </div>
      <div className="third">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
