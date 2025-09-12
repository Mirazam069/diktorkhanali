import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Veb-sayt @iskhodev tomonidan yasaldi.
      </p>

      <div className="footer-socials">
        <a href="https://t.me/jafarxonn" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/jafarxonn"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="https://t.me/jafarxonn" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
}
