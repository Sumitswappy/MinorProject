
import React from 'react';
import SearchBar from './SearchBar';
import Colleges from './FeaturedColleges';
import Courses from './Courses';
import Reviews from './Reviews';

function Home() {
  return (
    <div className="Home">
      <SearchBar /> 
      <Colleges />
      <Reviews/> 
    </div>
  );
}

export default Home;
