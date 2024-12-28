import React from "react";
import ProfileDetails from "../components/ProfileDetails";
import "./ProfilePage.css";

const ProfilePage = ({ goToHome }) => {
  return (
    <div className="profile-page">
      <button className="back-button" onClick={goToHome}>
        Back to Home
      </button>
      <ProfileDetails />
    </div>
  );
};

export default ProfilePage;
