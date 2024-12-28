

import React from "react";
import { FaChevronDown, FaTimes, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import "./HomePage.css";
import DoctorCard from "./DoctorCard";

function Homepage() {
  const doctors = [
    {
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "English, Hindi",
      videoFee: 800,
      chatFee: "Free",
      rating: 4.1,
      profilePic: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Dr. Ankit Mehta",
      specialization: "Specialist in Cardiology",
      experience: "10 years of Experience",
      languages: "English, Hindi",
      videoFee: 1000,
      chatFee: 500,
      rating: 4.4,
      profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
        <div className="search-bar">
          <select>
            <option value="">Select Location</option>
            <option value="location1">New Delhi</option>
            <option value="location2">Mumbai</option>
          </select>
          <FaMapMarkerAlt className="location-icon" />
          <input type="text" placeholder="e.g. Doctor, specialization, clinic name" />
          <FaArrowRight className="search-icon" />
        </div>
      </div>
      <div className="filters">
        <button>
          Expertise <FaChevronDown />
        </button>
        <button>
          Gender <FaChevronDown />
        </button>
        <button>
          Fees <FaChevronDown />
        </button>
        <button>
          Languages <FaChevronDown />
        </button>
        <button>
          All filters <FaChevronDown />
        </button>
      </div>
      <div className="active-filters">
        <span>
          Hair Care <FaTimes />
        </span>
        <span>
          Female <FaTimes />
        </span>
        <span>
          Rs. 0-Rs. 500 <FaTimes />
        </span>
        <span>
          Hindi <FaTimes />
        </span>
      </div>
      <div className="doctor-cards">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
