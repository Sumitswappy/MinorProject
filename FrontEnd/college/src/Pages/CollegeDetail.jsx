// Import necessary React modules
import React, { useState } from 'react';

// Sample data (replace this with your actual data)
const collegeData = {
  name: 'Sample College',
  location: 'Sample City, State',
  affiliation: 'Sample University',
  certification: 'Sample Certification',
  placements: [
    { year: 2022, percentage: 90 },
    // Add more years as needed
  ],
  reviews: [
    { id: 1, text: 'Great college!', rating: 5 },
    // Add more reviews as needed
  ],
};

// Define the CollegeDetail component
const CollegeDetail = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2>Overview</h2>
            <p>
              <strong>Name:</strong> {collegeData.name}
            </p>
            <p>
              <strong>Location:</strong> {collegeData.location}
            </p>
            <p>
              <strong>Affiliation:</strong> {collegeData.affiliation}
            </p>
            <p>
              <strong>Certification:</strong> {collegeData.certification}
            </p>
            <img src="/path/to/college-picture.jpg" alt="College" />
          </div>
        );
      case 'placements':
        return (
          <div>
            <h2>Placements</h2>
            <ul>
              {collegeData.placements.map((placement) => (
                <li key={placement.year}>
                  {placement.year}: {placement.percentage}%
                </li>
              ))}
            </ul>
          </div>
        );
      case 'reviews':
        return (
          <div>
            <h2>Student Reviews</h2>
            <ul>
              {collegeData.reviews.map((review) => (
                <li key={review.id}>
                  <p>{review.text}</p>
                  <p>Rating: {review.rating}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>{collegeData.name}</h1>

      {/* Navigation tabs */}
      <div>
        <button onClick={() => setActiveTab('overview')}>Overview</button>
        <button onClick={() => setActiveTab('placements')}>Placements</button>
        <button onClick={() => setActiveTab('reviews')}>Reviews</button>
      </div>

      {/* Render the content based on the active tab */}
      {renderContent()}

      {/* Apply Now and Download Brochure buttons */}
      <div>
        <button>Apply Now</button>
        <button>Download Brochure</button>
      </div>
    </div>
  );
};

// Export the component for use in other parts of your application
export default CollegeDetail;
