import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/ZENZONE3.jpg";
import "./CSS/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isTellUsDropdownOpen, setTellUsDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleTellUsDropdown = () => {
    setTellUsDropdownOpen(!isTellUsDropdownOpen);
  };

  return (
    <div className="dashboard">
      <div className="dash-top">
        <div className="logo-container" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-name">ZENZONE</span>
        </div>
        
        <div className="nav-right">
          {/* About Us Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleAboutDropdown}>
              About Us <span className={`arrow ${isAboutDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isAboutDropdownOpen && (
              <div className="dropdown-content">
                <p onClick={() => navigate('/our-mission')}>Our Mission</p>
                <p onClick={() => navigate('/our-team')}>Our Team</p>
                <p onClick={() => navigate('/contact')}>Contact</p>
              </div>
            )}
          </div>

          {/* Tell Us About Yourself Dropdown */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleTellUsDropdown}>
              Tell us about yourself <span className={`arrow ${isTellUsDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isTellUsDropdownOpen && (
              <div className="dropdown-content">
                <p onClick={() => navigate('/your-story')}>Your Story</p>
                <p onClick={() => navigate('/goals')}>Your Goals</p>
                <p onClick={() => navigate('/challenges')}>Your Challenges</p>
              </div>
            )}
          </div>

          <button 
            className="btn mt-0" 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </div>

      <div className="dash-main">
        <div className="content">
          <h1 className="tagline">A Safe Space for Healing</h1>
          <p className="belowtagline">Together, let's take the first step towards a healthier you.</p>
        </div>

        {/* Contact Us Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 9836467453</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>zenzone@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
