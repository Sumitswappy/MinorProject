import React from 'react';
import './SearchBar.css';

function SearchBar() {
    const locations = ["Hydrabad", "Delhi", "Bangalore", "Mumbai", "Kolkata", "Chennai", "Bhubaneswar",  "Gurgaon", "Pune", 
                      "Ahmedabad", "Noida", "Chandigarh", "Visakhapatnam", "Warangal", "Guntur", "Nizambad", "Rajkot", "Surat", 
                      "Faridabad", "Sonepat", "Rohtak", "Ranchi", "Kolhapur", "Davangere", "Mysore", "Calicut", "Kozhikode", 
                      "Kollam", "Bhopal", "Jabalpur", "Aurangabad", "Nagpur", "Ahmednagar", "Amrabati", "Sangli", "Gangtok", 
                      "Ludhiana", "Faridkot", "Amritsar", "Gurdaspur", "Jalandhar", "Patiala", "Bhatinda", "Udaipur", "Vellore", 
                      "Tiruvannamalai", "Coimbatore", "Erode", "Madurai", "Tiruchengode", "Salem", "Aligarh", "Ghaziabad", "Agra",
                      "Lucknow", "Mathura", "Muzaffaranagar", "Meerut", "Bijnor", "Burdwan", "Bankura", "Durgapur", "Nashik", 
                      "Secunderabad", "Chittoor", "Srikakulam", "Panipat", "Nellore", "Trichy", "Tirupathi", "Chirala", "Guwahati",
                      "Patna", "Raipur", "Baroda", "Karnal", "Ambala", "Kurukshetra", "Solan", "Jammu", "Mangalore", "Belgaum", 
                      "Manipal", "Thiruvanantapuram", "Kochi", "Palakkad", "Cochin", "Kottayam", "Gwalior", "Indore", "Satna", "Beed",
                      "Latur", "Solapur", "Nasik", "Dhule", "Jalgaon", "Srinagar", "Wardha", "Satara", "Akola", "Kurnool", "Greater Noida",
                      "Ajmer", "Alwar", "Jodhpur", "Jaipur", "Kota", "Bikaner", "Anand", "Murshidabad", "Bijapur", "Trissur", "Jhassi",
                      "Kanpur", "Yamuna Nagar", "Mallapuram", "Gulbarga", "Ratnagiri", "Allahabad", "Gandhinagar", "Gorokhpur", "Varanasi",
                      "Bareilly", "Bidar", "Hisar", "Sagar", "Dehradun", "Roorkee", "Kadapa", "Mohali", "Rewa", "Ujjain", "Shillong",
                      "Shimla", "Darbhanga", "Vijayawada", "Karimnagar", "Eluru", "Dharwad", "Hubli", "Kolar", "Rourkela", "Thane", 
                      "Behrampur", "Moradabad", "Darjelling", "Haridwar", "Jamnagar", "Bhavnagar", "Bahadurgarh", "Junagadh", "Kakinada",
                      "Barnola", "Firozpur", "Saharanpur", "Haldwani", "Mujjafarpur", "Trivandrum", "Kanyakumari", "Cuttack", "Hoogly", 
                      "Bilashpur", "Panaji", "Andra Pradesh", "Assam", "Bihar", "Chattisgarh", "Delhi NCR", "Goa", "Gujarat", "Haryana",
                      "Himachal Pradesh", "Jammu & Kashmir", "Jharkhad", "Karnataka", "Kerala", "Madhya Pradesh", "MAharastra", "Odissha",
                      "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Uttar Pradesh", "Uttarakhand", "Telengana", "West Bengal"];
  
    const courses = ["Engineering (B.Tech/B.E)", "Medical (MBBS)", "Dentistry (BDS)", "Pharmacy (B.Pharm/M.Pharm)", 
                    "Nursing (B.Sc Nursing/M.Sc Nursing)", "Architecture (B.Arch/M.Arch)", "Business Administration (BBA/MBA)", 
                    "Commerce (B.Com/M.Com)", "Science (B.Sc/M.Sc)", "Computer Applications (BCA/MCA)", "Law (LLB/LLM)", 
                    "Education/Teaching (B.Ed/M.Ed)", "Journalism/Mass Communication", "Design (B.Des/M.Des)", "Hotel Management",
                    "Animation/Multimedia", "Fine Arts", "Diploma Courses", "Agriculture (B.Sc Agriculture)", "Forestry", 
                    "Library Science", "Performing Arts (Music/Dance/Drama)", "Physical Education", "Fashion Designing", 
                    "Film/Television Production", "Food Technology", "Interior Designing", "Travel and Tourism", "Event Management",
                    "Medical Laboratory Technology", "Psychology (BA/B.Sc Psychology)", "Sociology (BA/B.Sc Sociology)",
                    "Economics (BA/B.Sc Economics)", "Geography (BA/B.Sc Geography)", "History (BA History)",
                    "Political Science (BA/B.Sc Political Science)", "Languages (BA Literature/Linguistics)"];
  
    const featuredColleges = [
      { id: 1, name: 'Example College 1', location: 'City, Country', image: 'college1.jpg' },
      { id: 2, name: 'Sample University', location: 'Town, Country', image: 'university.jpg' },
      { id: 3, name: 'College XYZ', location: 'City, Country', image: 'collegeXYZ.jpg' },
      { id: 4, name: 'College Techno', location: 'City, Country', image: 'collegeTechno.jpg' },
      { id: 3, name: 'College ABC', location: 'City, Country', image: 'collegeABC.jpg' }
    ];
  
    const reviews = [
      { id: 1, user: 'User 1', comment: 'Great college, excellent professors!', rating: 4 },
      { id: 2, user: 'User 2', comment: 'Nice campus and good facilities.', rating: 5 },
      { id: 3, user: 'User 3', comment: 'Nikal Sale, ebhi koi campuss hai', rating: 0.1 },
      { id: 4, user: 'User 4', comment: 'Bekar College and its Faculty and also its Facilities.', rating: 0 }
    ];
  
    const handleLocationSearch = (e) => {
      const locationQuery = e.target.value;
      console.log('Search by Location:', locationQuery);
    };
  
    const handleCourseSearch = (e) => {
      const courseQuery = e.target.value;
      console.log('Search by Course Name:', courseQuery);
    };
  return (
    <div className="search-bar">
      <select onChange={handleLocationSearch}>
        <option value="">Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      <select onChange={handleCourseSearch}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      <a className='Button'>Search</a>
    </div>
  );
}

export default SearchBar;
