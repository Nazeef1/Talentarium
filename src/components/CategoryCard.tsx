import React from "react";

interface Props {
  image: string;
  title: string;
  altText: string;
  onClick: () => void;
}

function CategoryCard({ image, title, altText, onClick }: Props) {
  return (
    <div
      className="category-box-landingPage"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={altText} />
      <p>{title}</p>
    </div>
  );
}

export default CategoryCard;
