import React from 'react';
import './FeaturedColleges.css';

function FeaturedColleges() {
  const colleges = [
    { name: 'College A', location: 'City A, State A', ranking: 1 },
    { name: 'College B', location: 'City B, State B', ranking: 2 },
    { name: 'College C', location: 'City C, State C', ranking: 3},
  {name: 'College D', location: 'City D, State D', ranking: 4 },
  ];//data retrieved will be here

  return (
    <section className="featured-colleges">
      <h2>Colleges</h2>
      <div className="college-list">
        {colleges.map((college, index) => (
          <div key={index} className="college-card">
            <h3>{college.name}</h3>
            <p>{college.location}</p>
            <p>Ranking: #{college.ranking}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedColleges;
