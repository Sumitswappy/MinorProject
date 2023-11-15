import React, { useState } from 'react';
import Axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import './CustomSearch.css';

export default function CustomSearch() {
  const url = "http://localhost:8080/get-filtered-college";
  const [data, setData] = useState({
    cityName: "",
    courseName: "",
  });

  const handleLocationChange = (e) => {
    setData({ ...data, cityName: e.target.value });
  };

  const handleCourseChange = (e) => {
    setData({ ...data, courseName: e.target.value });
  };

  const handleLocationSearch = (e) => {
    // Perform any additional search/filter logic if needed
    setData({ ...data, cityName: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const query = `?cityName=${data.cityName}&courseName=${data.courseName}`;
    const fullUrl = `${url}${query}`;
    
    Axios.get(fullUrl)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const allLocations = [
    "Hyderabad", "Delhi", "Bangalore", "Mumbai", "Kolkata", "Chennai", "Bhubaneswar", "Gurgaon", "Pune",
    "Ahmedabad", "Noida", "Chandigarh", "Visakhapatnam", "Warangal", "Guntur", "Nizamabad", "Rajkot", "Surat",
    "Faridabad", "Sonipat", "Rohtak", "Ranchi", "Kolhapur", "Davangere", "Mysore", "Calicut", "Kozhikode",
    "Kollam", "Bhopal", "Jabalpur", "Aurangabad", "Nagpur", "Ahmednagar", "Amravati", "Sangli", "Gangtok",
    "Ludhiana", "Faridkot", "Amritsar", "Gurdaspur", "Jalandhar", "Patiala", "Bathinda", "Udaipur", "Vellore",
    "Tiruvannamalai", "Coimbatore", "Erode", "Madurai", "Tiruchengode", "Salem", "Aligarh", "Ghaziabad", "Agra",
    "Lucknow", "Mathura", "Muzaffarnagar", "Meerut", "Bijnor", "Burdwan", "Bankura", "Durgapur", "Nashik",
    "Secunderabad", "Chittoor", "Srikakulam", "Panipat", "Nellore", "Trichy", "Tirupathi", "Chirala", "Guwahati",
    "Patna", "Raipur", "Vadodara", "Karnal", "Ambala", "Kurukshetra", "Solan", "Jammu", "Mangalore", "Belgaum",
    "Manipal", "Thiruvananthapuram", "Kochi", "Palakkad", "Cochin", "Kottayam", "Gwalior", "Indore", "Satna", "Beed",
    "Latur", "Solapur", "Nashik", "Dhule", "Jalgaon", "Srinagar", "Wardha", "Satara", "Akola", "Kurnool", "Greater Noida",
    "Ajmer", "Alwar", "Jodhpur", "Jaipur", "Kota", "Bikaner", "Anand", "Murshidabad", "Bijapur", "Thrissur", "Jhansi",
    "Kanpur", "Yamuna Nagar", "Malappuram", "Gulbarga", "Ratnagiri", "Allahabad", "Gandhinagar", "Gorakhpur", "Varanasi",
    "Bareilly", "Bidar", "Hisar", "Sagar", "Dehradun", "Roorkee", "Kadapa", "Mohali", "Rewa", "Ujjain", "Shillong",
    "Shimla", "Darbhanga", "Vijayawada", "Karimnagar", "Eluru", "Dharwad", "Hubli", "Kolar", "Rourkela", "Thane",
    "Berhampur", "Moradabad", "Darjeeling", "Haridwar", "Jamnagar", "Bhavnagar", "Bahadurgarh", "Junagadh", "Kakinada",
    "Barnala", "Firozpur", "Saharanpur", "Haldwani", "Muzaffarpur", "Trivandrum", "Kanyakumari", "Cuttack", "Hooghly",
    "Bilaspur", "Panaji", "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi NCR", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha",
    "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Uttar Pradesh", "Uttarakhand", "Telangana", "West Bengal"
  ];


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
    const filteredLocations = allLocations.filter((location) =>
    location.toLowerCase().includes(data.cityName.toLowerCase())
  );

  return (
    <form onSubmit={submit}>
      <div className="search-bar">
        <div className="custom-select-container">
          <input
            type="text"
            placeholder="Search Location..."
            className="custom-search-input"
            value={data.cityName}
            onChange={handleLocationSearch}
          />
        </div>
        <select className="custom-select" onChange={handleLocationChange} value={data.cityName}>
          <option value="">Select Location</option>
          {filteredLocations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <select className="custom-select" onChange={handleCourseChange} value={data.courseName}>
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <MDBBtn className="bg-success bg-gradient text-light rounded-5" type="submit">
          Search
        </MDBBtn>
      </div>
    </form>
  );
}