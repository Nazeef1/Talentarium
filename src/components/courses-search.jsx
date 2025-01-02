import React from 'react';
import './courses-search.css';

const CoursesSearch = () => {
    return (
        <div class="selection">
            <div class="textbar">
                <h1>Available Courses</h1>
                <div class="searchbar">
                    <input type="text" placeholder="Search for courses..." />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesSearch;