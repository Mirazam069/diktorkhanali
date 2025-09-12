import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./HeroBurger.css";

const HeroBurger = () => {
  const [closed, setClosed] = useState(false); // dastlab ochiq

  return (
    <div className="hero-burger-container">
      {/* Burger Icon */}
      <button
        className={`hero-burger-btn ${closed ? "active" : ""}`}
        onClick={() => setClosed(!closed)}
      >
      </button>

      {/* Social Icons */}
      <div className={`hero-social-icons ${closed ? "hide" : "show"}`}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-facebook"></ion-icon>
          <span className="hero-tooltip">Facebook</span>
        </a>
        <a href="https://www.instagram.com/diktorkhanali?igsh=c2Z3a25sa3FpYmpl" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-instagram"></ion-icon>
          <span className="hero-tooltip">Instagram</span>
        </a>
        <a href="https://t.me/jafarxonn" target="_blank" rel="noopener noreferrer">
          <ion-icon name="person-outline"></ion-icon>
          <span className="hero-tooltip">Shaxsiy telegram</span>
        </a>
        <a href="https://www.youtube.com/@Dikhtor_tv" target="_blank" rel="noopener noreferrer">
          <ion-icon name="logo-youtube"></ion-icon>
          <span className="hero-tooltip">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default HeroBurger;
