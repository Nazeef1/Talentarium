import React from "react";


const CategoryDropdown = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
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
