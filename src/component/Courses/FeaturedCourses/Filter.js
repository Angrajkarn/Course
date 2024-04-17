import  { useState } from 'react';
import './filter.css';

const Filter = ({ courses }) => {
  const [visibleCourses, setVisibleCourses] = useState(4);

  // Check if courses is defined and has a length greater than 0
  const slicedCourses = courses && courses.length > 0 ? courses.slice(0, visibleCourses) : [];

  const handleLoadMore = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 4);
  };

  return (
    <div className="filter">
      <h2 className="filter-heading">Explore Our Courses</h2>
      <div className="card-container">
        {slicedCourses.map((course) => (
          <div className="card" key={course.id}>
            <div className="card-image">
              <img className="course-image" src={course.imageUrl} alt={course.title} />
              {course.discount && <span className="discount-badge">-{course.discount}%</span>}
            </div>
            <div className="card-content">
              <span className="tag">{course.tag}</span>
              <span className="tag">{course.Catogery}</span>
              <h3 className="title">{course.title}</h3>
              <p className="description">{course.description}</p>
              <div className="price">{course.price && `$${course.price}`}</div>
            </div>
          </div>
        ))}
      </div>
      {courses.length > visibleCourses && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
