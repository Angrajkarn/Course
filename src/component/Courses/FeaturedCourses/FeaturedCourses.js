import React from 'react';
import './FeaturedCourses.css';

const FeatureSection = ({ courses }) => {

  return (
    <div className="feature-section">
      <h2>Feature Courses</h2>
      <div className="card-container">
        {courses.slice(0, 5).map((course) => (
          <div className="card" key={course.id}>
            <div className="card-image">
              <img src={course.imageUrl} alt={course.title} />
              {course.discount && <span className="discount-badge">-{course.discount}%</span>}
            </div>
            <div className="card-content">
              <span className="tag">{course.tag}</span>
              <h3 className="title">{course.title}</h3>
              <p className="description">{course.description}</p>
              <div className="price">{course.price && `$${course.price}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;


