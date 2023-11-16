import React, { useState } from 'react';
import Axios from 'axios';
import { MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle} from 'mdb-react-ui-kit';
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
        console.log('Error:', error);
      });
  };
  const allLocations = [
    "Agra", "Ahmedabad", "Ahmednagar", "Ajmer", "Aligarh", "Allahabad", "Ambala", "Amravati", "Amritsar",
    "Anand", "Aurangabad", "Bareilly", "Bathinda", "Beed", "Belgaum", "Bhavnagar", "Bhilwara", "Bhopal", "Bhubaneswar",
    "Bidar", "Bijapur", "Bikaner", "Bilaspur", "Calicut", "Chandigarh", "Chennai", "Chirala", "Chittoor", "Cochin", "Cuttack",
    "Davangere", "Dehradun", "Delhi", "Dewas", "Dhanbad", "Dhule", "Durg", "Durgapur", "Eluru", "Erode", "Faridabad",
    "Farrukhabad", "Firozabad", "Gangtok", "Gandhinagar", "Gaya", "Ghaziabad", "Gorakhpur", "Greater Noida",
    "Gulbarga", "Guna", "Guntur", "Gurgaon", "Guwahati", "Haridwar", "Hisar", "Hooghly", "Howrah", "Hubli","Hyderabad", "Ichalkaranji",
    "Imphal", "Indore", "Jabalpur", "Jaipur", "Jalandhar", "Jamnagar", "Jamshedpur", "Jammu", "Jhansi", "Jharkhand", "Jodhpur",
    "Junagadh", "Kadapa", "Kakinada", "Kalyan-Dombivli", "Kanpur", "Karimnagar", "Karnal", "Kochi", "Kolar", "Kolkata", "Kollam",
    "Kota", "Kozhikode", "Kurnool", "Kurukshetra", "Lucknow", "Ludhiana", "Madhya Pradesh", "Madurai", "Maharashtra", "Malappuram",
    "Manipal", "Mangalore", "Mathura", "Meerut", "Moradabad", "Mumbai", "Muzaffarnagar", "Muzaffarpur", "Mysore", "Nagpur",
    "Naihati", "Nanded", "Nashik", "Navi Mumbai", "Nellore", "Nizamabad", "Noida", "Odisha", "Ozhukarai", "Palakkad",
    "Panchkula", "Panipat", "Panaji", "Patna", "Patiala", "Proddatur", "Puducherry", "Pune", "Raipur", "Rajahmundry", "Rajkot",
    "Rampur", "Ranchi", "Ratlam", "Rewa", "Roorkee", "Rourkela", "Sagar", "Saharanpur", "Salem", "Sangli", "Satara", "Satna",
    "Secunderabad", "Shillong", "Shimla", "Shimoga", "Siliguri", "Solan", "Solapur", "Sonipat", "Srinagar", "Srikakulam",
    "Surat", "Thane", "Thanjavur", "Thiruvananthapuram", "Thrissur", "Tiruchengode", "Tirunelveli", "Tirupathi", "Tirupur",
    "Udaipur", "Ujjain", "Ulhasnagar", "Uran", "Vadodara", "Vasai", "Vellore", "Vijayawada", "Vijayanagaram", "Visakhapatnam",
    "Vizianagaram", "Warangal", "Wardha", "Yamuna Nagar"
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
            placeholder="Search City..."
            className="custom-search-input"
            value={data.cityName}
            onChange={handleLocationSearch}
          />
        </div>
        <select className="custom-select" onChange={handleLocationChange} value={data.cityName}>
        <option value="">Select City</option>
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