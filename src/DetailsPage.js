import React from "react";

const DetailsPage = ({ doctor, goBack }) => {
  return (
    <div>
      <header>
        <h1>AMRUTAM</h1>
        <nav>
          <a href="#" onClick={goBack}>
            Back
          </a>
        </nav>
      </header>
      <div className="details-page">
        <div className="doctor-info">
          <img src={doctor.profilePic} alt={doctor.name} />
          <h2>{doctor.name}</h2>
          <p>{doctor.specialization}</p>
          <p>{doctor.experience} of Experience</p>
          <p>
            Speaks: {doctor.languages.join(", ")}
          </p>
          <p>Consultation Fee: ₹{doctor.consultationFees}</p>
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
