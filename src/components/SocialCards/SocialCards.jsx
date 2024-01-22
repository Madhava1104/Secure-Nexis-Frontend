import {
  // Button,
  // Card,
  // Col,
  // Image,
  message,
  // Row,
  // Space,
  Spin,
  // Typography,
} from "antd";
import React, { useEffect, useState } from "react";
// import {
//   AiFillTwitterCircle,
//   AiFillLinkedin,
//   AiFillGithub,
// } from "react-icons/ai";

// import { CgWebsite } from "react-icons/cg";
// import { SiGmail } from "react-icons/si";
import './MyComponent.css';
import { API, AVATAR_API } from "../../constant";
import { Link } from 'react-router-dom';

const SocialCards = () => {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users`);
      const data = await response.json();
      setProfiles(data ?? []);
    } catch (error) {
      console.error(error);
      message.error("Error while fetching profiles!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (

    <nav className="navbar">
    <div className="navbar-brand">SOFTECH</div>
    <ul className="navbar-nav">
      <li className="nav-item">Home</li>
      <li className="nav-item">About</li>
      <li className="nav-item">Services</li>
      <li className="nav-item">Contact</li>
      <li className="nav-item">
          <Link to="/Secure-Nexis-Frontend/signin">Logout</Link>
        </li>

    </ul>
  </nav>
  );
};

export default SocialCards;
