import React from "react";
import "./RightNavbar.css";
import { FaHome, FaInfoCircle, FaMicrophone , FaPhone, FaUsers, FaDollarSign  } from "react-icons/fa";

const RightNavbar = () => {
  return (
    <div className="right-navbar">
      <a href="#home">
        <FaHome className="icon" />
        <span className="tooltip">Bosh sahifa</span>
      </a>
      <a href="#about">
        <FaInfoCircle className="icon" />
        <span className="tooltip">Men haqimda</span>
      </a>
      <a href="#voice">
        <FaMicrophone  className="icon" />
        <span className="tooltip">Real ovoz</span>
      </a>
      <a href="#testimonals">
        <FaUsers className="icon" />
        <span className="tooltip">Mijozlarim</span>
      </a>
      <a href="#price">
        <FaDollarSign  className="icon" />
        <span className="tooltip">Narxlar</span>
      </a>
      <a href="#footer">
        <FaPhone className="icon" />
        <span className="tooltip">Bog'lanish</span>
      </a>
    </div>
  );
};

export default RightNavbar;
