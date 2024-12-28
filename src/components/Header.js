import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">AMRUTAM</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Find Doctors</a>
        <a href="#">About Us</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign-up</button>
      </div>
    </header>
  );
}

export default Header;
