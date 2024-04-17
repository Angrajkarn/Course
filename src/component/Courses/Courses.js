import React,{ useState, useEffect } from 'react';
import FeatureSection from './FeaturedCourses/FeaturedCourses'; 
import FilterCourses from './FilterCourses/FilterCourses';
import Filter from './FeaturedCourses/Filter';


const Courses = () => {

  const [originalCourses, setOriginalCourses] = useState([]);

  const [filteredCourses, setFilteredCourses] = useState([]);

  // Dummy data for courses
    const coursesData = [
      {
        id: 1,
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build websites.',
        imageUrl: 'https://via.placeholder.com/300x200',
        price: 29.99,
        discount: '30%',
        tag: 'Beginner',
        category: "Web development",
      },
      {
        id: 2,
        title: 'Java Full Stack Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build websites.',
        imageUrl: 'https://via.placeholder.com/300x200',
        price: 10.99,
        discount: '20%',
        tag: 'Intermediate',
      },
      {
        id: 3,
        title: 'Python Full Stack Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build websites.',
        imageUrl: 'https://via.placeholder.com/300x200',
        price: 90.99,
        discount: '30%',
        tag: 'Beginner',
      },
      {
        id: 4,
        title: 'Advanced Web Development',
        description: 'Learn advanced topics in web development.',
        imageUrl: 'https://via.placeholder.com/300x200',
        price: 40,
        discount: '30%',
        tag: 'Advanced',
      },
      {
        id: 5,
        title: 'Python Full Stack Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build websites.',
        imageUrl: 'https://via.placeholder.com/300x200',
        price: 2,
        discount: '30%',
        tag: 'Intermediate',
      },
    ];

    useEffect(() => {
    setTimeout(() => {
      setOriginalCourses(coursesData);
      setFilteredCourses(coursesData);
    }, 1000);
  }, []);


  const handleFilterCourses = (filteredData) => {
    setFilteredCourses(filteredData);
  };

  return (
    <div className="app">

      <FilterCourses courses={originalCourses} setFilteredCourses={handleFilterCourses}/>
      <Filter courses={filteredCourses} handleFilterCourses={handleFilterCourses}/>

      
      <FeatureSection courses={originalCourses}/>
    </div>
  );
};

export default Courses;