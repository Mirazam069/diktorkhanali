import React, { useState } from "react";
import "./Showreel.css";

// Rasmlarni import qilib olamiz
import photo1 from "../assets/imageInsta.jpg";
import photo2 from "../assets/imageInsta.jpg";
import photo3 from "../assets/imageInsta.jpg";
import photo4 from "../assets/imageInsta.jpg";
import photo5 from "../assets/imageInsta.jpg";

export default function Showreel() {
  const imgLinks = [photo1, photo2, photo3, photo4, photo5];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sr-wrap">
      <h2 className="sr-title">Showreel</h2>

  

      <div
        className="sr-container"
        onMouseLeave={() => setActiveIndex(0)}
      >
        {imgLinks.map((url, i) => (
          <button
            key={i}
            className={`sr-box ${activeIndex === i ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(i)}
            onClick={() =>
              window.open("https://instagram.com", "_blank", "noopener,noreferrer")
            }
          >
            <img src={url} alt={`Showreel ${i + 1}`} className="sr-image" />
          </button>
        ))}
      </div>
    </div>
  );
}
