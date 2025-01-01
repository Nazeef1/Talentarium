import React from 'react';
import './courses-search.css';

const CoursesSearch = ({ searchTerm, handleSearch }) => {
    return (
      <div className="selection">
        <div className="textbar">
          <h1>Available Courses</h1>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CoursesSearch;