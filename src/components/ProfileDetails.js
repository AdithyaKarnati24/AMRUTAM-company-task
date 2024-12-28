import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <div className="profile-header">
        <img src="doctor-image-placeholder.jpg" alt="Doctor" />
        <h2>Dr. Bruce Willis</h2>
        <p>Gynecologist</p>
      </div>
      <div className="profile-info">
        <p>About me: Detailed bio goes here...</p>
        <p>Specializations: Women's Health, Skin Care</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
