import React from "react";


function CategoryCard({image, title, altText, onClick }) {
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
