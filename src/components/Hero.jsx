import React, { useRef, useState } from "react";
import "./Hero.css";
import klientImage from "../assets/image.png";
import { FaMicrophone } from "react-icons/fa"; // 🎤 mikrofon ikoni
import VoiceList from "./VoiceList";
import HeroBurger from "./HeroBurger";
import reklamaAudio  from "../assets/audio.mp3";

const Hero = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play error:", err));
    }
  };
  return (
    <section className="hero" id="home">
      <div className="hero-voice-box">
        <button className="hero-play-btn" onClick={togglePlay}>
          {isPlaying ? <ion-icon name="pause"></ion-icon> : <ion-icon name="play"></ion-icon>}
        </button>

        <div className="hero-voice-info">
          <span className="hero-voice-title">Ovozni eshitib ko'rish</span>
          <span className="hero-voice-artist">Professional diktorlik xizmati</span>
        </div>

        <a href={reklamaAudio } download className="hero-download-btn">
          <ion-icon name="arrow-down-circle-outline"></ion-icon>
        </a>

        {/* Haqiqiy audio */}
        <audio ref={audioRef} src={reklamaAudio} preload="auto" />
      </div>
      <HeroBurger />
      <div className="stars"></div>

      {/* ✨ 3 sekunddan keyin paydo bo‘ladigan matn */}
      <p className="hero-subtitle">dublyaj & diktorlik hizmati </p>

      <h1 className="hero-title">
        {"DIKTORKHANALI".split("").map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h1>

      {/* Mikrofon ikoni orqa fon uchun */}
      <FaMicrophone className="hero-mic" />

      <div className="hero-box">
        <VoiceList />
        <div className="red-box"></div>
        <img src={klientImage} alt="Klient" className="hero-image" />
      </div>
      <div className="sr-circle-text">
        <svg viewBox="0 0 300 300" className="circle-svg">
          <defs>
            <path
              id="circlePath"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>
          <text fill="white" fontSize="20" fontWeight="600">
            <textPath
              href="#circlePath"
              startOffset="0%"
              className="textCircle"
            >
              Diktorkhanali • Diktorkhanali • Diktorkhanali •
            </textPath>
          </text>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
