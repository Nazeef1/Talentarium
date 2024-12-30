import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoryContainer = () => {
  const navigate = useNavigate();

  const categories = [
    {
      image: "/images/web-programming.png",
      altText: "Category 1",
      title: "Web Development",
    },
    { image: "/images/data.png", altText: "Category 2", title: "Data Science" },
    { image: "/images/prototype.png", altText: "Category 3", title: "Design" },
    {
      image: "/images/marketing.png",
      altText: "Category 4",
      title: "Marketing",
    },
    { image: "/images/profit.png", altText: "Category 5", title: "Business" },
    {
      image: "/images/personal-development.png",
      altText: "Category 6",
      title: "Personal Development",
    },
    {
      image: "/images/camera.png",
      altText: "Category 7",
      title: "Photography",
    },
    {
      image: "/images/fitness.png",
      altText: "Category 8",
      title: "Health & Fitness",
    },
  ];

  interface Category {
    image: string;
    altText: string;
    title: string;
  }

  const handleCategoryClick = (categoryTitle: string) => {
    navigate(`/category/${encodeURIComponent(categoryTitle)}`);
  };

  return (
    <div className="category-container-landingPage">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          altText={category.altText}
          title={category.title}
          onClick={() => handleCategoryClick(category.title)}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;
