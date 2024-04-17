
import { useState } from 'react';
import './FilterCourses.css';

const FilterCourses = ({ courses, setFilteredCourses }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterCourses(category, selectedLevel, selectedPrice, sortBy);
  };

  const handleLevelChange = (event) => {
    const level = event.target.value;
    setSelectedLevel(level);
    filterCourses(selectedCategory, level, selectedPrice, sortBy);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice(price);
    filterCourses(selectedCategory, selectedLevel, price, sortBy);
  };

  const handleSortByChange = (event) => {
    const sortByOption = event.target.value;
    setSortBy(sortByOption);
    filterCourses(selectedCategory, selectedLevel, selectedPrice, sortByOption);
  };

  const filterCourses = (category, level, price, sortByOption) => {
    let filteredCourses = courses;

    if (category) {
      filteredCourses = filteredCourses.filter((course) => course.tag === category);
    }

    if (level) {
      filteredCourses = filteredCourses.filter((course) => course.level === level);
    }

    if (price) {
      const [minPrice, maxPrice] = price.split('-');
      filteredCourses = filteredCourses.filter(
        (course) => course.price >= parseInt(minPrice) && course.price <= parseInt(maxPrice)
      );
    }

    if (sortByOption === 'newest') {
      filteredCourses.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortByOption === 'oldest') {
      filteredCourses.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setFilteredCourses(filteredCourses);
  };

  return (
    <div className="filter-courses">
      <div className="filter-group">
        <label className="filter-label">Category:</label>
        <select className="filter-select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Beginner">Web Development</option>
          <option value="Intermediate">App development</option>
          <option value="Advanced">Data Science</option>
          <option value="Beginner">Data analytics</option>
          <option value="Intermediate">Full Stack development</option>
          <option value="Advanced">Graphics</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Level:</label>
        <select className="filter-select" value={selectedLevel} onChange={handleLevelChange}>
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Price:</label>
        <select className="filter-select" value={selectedPrice} onChange={handlePriceChange}>
          <option value="">All Prices</option>
          <option value="0-15">$0 - $15</option>
          <option value="16-30">$16 - $30</option>
          <option value="31-50">$31 - $50</option>
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Sort By:</label>
        <select className="filter-select" value={sortBy} onChange={handleSortByChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCourses;
