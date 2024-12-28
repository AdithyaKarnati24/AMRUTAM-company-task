

import React from "react";
import { FaStar } from "react-icons/fa"; // Importing the star icon
import { FaUserMd, FaLanguage } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      {/* Profile Picture with Rating */}
      <div className="profile-section">
        <img src={doctor.profilePic} alt={doctor.name} className="profile-pic" />
        <div className="rating">
          <span>{doctor.rating}</span> <FaStar />
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <h3>{doctor.name}</h3>
        <p className="icon">
          <FaUserMd /> {doctor.specialization}
        </p>
        <p className="icon">
          <MdOutlineWork /> {doctor.experience}
        </p>
        <p className="icon">
          <FaLanguage /> Speaks: {doctor.languages}
        </p>
        <div className="consultation-fees">
          <span className="video-fee">
            Video Consultation: <strong>₹{doctor.videoFee}</strong>
          </span>
          <span className="chat-fee">
            Chat Consultation: <strong>{doctor.chatFee}</strong>
          </span>
        </div>
        <div className="card-buttons">
          <button className="view-profile-btn">View Profile</button>
          <button className="book-consultation-btn">Book a consultation</button>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
