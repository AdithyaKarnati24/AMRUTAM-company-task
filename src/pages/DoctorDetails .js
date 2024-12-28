import React from "react";
import "./DoctorDetails.css";

const DoctorDetails = ({ doctor, setSelectedDoctor }) => {
  return (
    <div className="details-page">
      <header>
        <button onClick={() => setSelectedDoctor(null)}>Back</button>
        <h1>AMRUTAM</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Find Doctors</a>
          <a href="#">About Us</a>
        </nav>
      </header>
      <div className="doctor-info">
        <img src={doctor.profileImage} alt={doctor.name} />
        <h2>{doctor.name}</h2>
        <p>{doctor.expertise}</p>
        <p>{doctor.experience} of Experience</p>
        <p>Speaks: {doctor.languages.join(", ")}</p>
      </div>
      <div className="consultation">
        <h3>Consultation Fees</h3>
        <p>Video: ₹{doctor.consultationFees.video}</p>
        <p>Chat: ₹{doctor.consultationFees.chat}</p>
      </div>
    </div>
  );
};

export default DoctorDetails;
