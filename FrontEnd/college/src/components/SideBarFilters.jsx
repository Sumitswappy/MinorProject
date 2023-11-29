import React, { useState } from 'react';
import { MDBAccordion, MDBAccordionItem, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import './SideBarFilters.css';

const SidebarFilters = ({ onFilterChange }) => {
  const cities = [
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
    const states = [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
      "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
      "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
      "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Lakshadweep", "Delhi", "Puducherry"
    ];
    
    const feesStructure = ["Less than ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000 - ₹2,00,000", "₹2,00,000 - ₹3,00,000", "₹3,00,000 - ₹4,00,000", "More than ₹4,00,000"];

    const [filters, setFilters] = useState({
      city: '',
      course: '',
      state: '',
      fees: ''
    });
   
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };
    const applyFilters = () => {
     
      // Call the parent component's callback with the selected filters
      onFilterChange(filters);
    };
  
    return (
     
      <div className="sidebar">
        <MDBAccordion alwaysOpen>
          <MDBAccordionItem collapseId={1} headerTitle='City'>
            <div className="accordion-scroll">
              {cities.map((city, index) => (
                <div key={index}>
                <MDBCheckbox
                  id={`cityCheckbox_${index}`}
                  label={city}
                  value={filters.city === city}
                  onChange={() => handleFilterChange({ target: { name: 'city', value: city }})}
                /><br/>
                </div>
              ))}
            </div>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={2} headerTitle='State'>
  <div className="accordion-scroll">
    {states.map((state, index) => (
      <div key={index}>
        <MDBCheckbox
          id={`stateCheckbox_${index}`}
          label={state}
          value={filters.state === state}
          onChange={() => handleFilterChange({ target: { name: 'state', value: state }})}
        />
        <br/>
      </div>
    ))}
  </div>
</MDBAccordionItem>
        
          <MDBAccordionItem collapseId={3} headerTitle='Courses'>
              <div className="accordion-scroll">
              {courses.map((course, index) => (
                <div key={index}>
                <MDBCheckbox
                  id={`courseCheckbox_${index}`}
                  label={course}
                  value={filters.course === course}
                  onChange={() => handleFilterChange({ target: { name: 'course', value: course }})}
                />
                <br/>
                </div>
              ))}
            </div>
          </MDBAccordionItem>
          {/* <MDBAccordionItem collapseId={4} headerTitle='Fees'>
              <div className="accordion-scroll">
              {feesStructure.map((fees, index) => (
                <MDBCheckbox
                  key={index}
                  id={`feesCheckbox_${index}`}
                  label={fees}
                  checked={filters.fees === fees}
                  onChange={() => handleFilterChange({ target: { name: 'fees', value: fees }})}
                />
              ))}
            </div>
          </MDBAccordionItem> */}
        </MDBAccordion>
  
        <MDBBtn className='m-2' onClick={applyFilters}>
          Apply Filters
        </MDBBtn>
      </div>

    );
  };
  
  export default SidebarFilters;