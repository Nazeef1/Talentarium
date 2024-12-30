import React from "react";

interface props {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryDropdown = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}: props) => {
  return (
    <select
      id="category-select"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
      <option>All Courses</option>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  );
};
export default CategoryDropdown;
