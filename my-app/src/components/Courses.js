import React from 'react';
import './Courses.css';

function Courses() {
  const courses = [
    { name: 'Computer Science', duration: '4 years', fees: '$10,000/year' },
    { name: 'Business Administration', duration: '3 years', fees: '$8,000/year' },
    { name: 'Biology', duration: '4 years', fees: '$9,000/year' },
  ]; //data retrieved will be here

  return (
    <section className="courses">
      <h2>Popular Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            <p>Fees: {course.fees}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
