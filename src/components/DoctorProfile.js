import React from "react";
import "./DoctorProfile.css";

function DoctorProfile({ doctor, onBack }) {
  return (
    <div className="doctor-profile">
      <button className="back-btn" onClick={onBack}>
        Back to Home
      </button>
      <div className="profile-header">
        <img src={doctor.profilePic} alt={doctor.name} className="profile-img" />
        <div className="rating">{doctor.rating} ★</div>
        <h1>{doctor.name}</h1>
        <p>{doctor.specialization}</p>
      </div>
      <div className="profile-details">
        <h3>About</h3>
        <p>{doctor.experience}</p>
        <p>Languages Spoken: {doctor.languages}</p>
        <h3>Appointment Fee</h3>
        <p>₹{doctor.videoFee}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default DoctorProfile;
