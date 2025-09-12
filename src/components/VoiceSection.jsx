import React, { useRef, useState } from "react";
import "./VoiceSection.css";
import { FaPlay, FaPause } from "react-icons/fa";

export default function VoiceSection() {
  const audios = [
    {
      title: "Football uchun ovoz",
      price: "50 000 so'm",
      src: "/audios/voice1.mp3",
    },
    {
      title: "Astral kino ovozi",
      price: "70 000 so'm",
      src: "/audios/voice2.mp3",
    },
    { title: "Podcast intro", price: "40 000 so'm", src: "/audios/voice3.mp3" },
    { title: "Reklama ovozi", price: "60 000 so'm", src: "/audios/voice4.mp3" },
    {
      title: "Trailer uchun ovoz",
      price: "80 000 so'm",
      src: "/audios/voice5.mp3",
    },
    {
      title: "Audio kitob ovozi",
      price: "100 000 so'm",
      src: "/audios/voice6.mp3",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  const togglePlay = (index) => {
    if (playingIndex === index) {
      audioRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        audioRefs.current[playingIndex].pause();
        audioRefs.current[playingIndex].currentTime = 0;
      }
      audioRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="bodys" id="voice">
      <div className="voice-section">
        {audios.map((audio, index) => (
          <div className="voice-box" key={index}>
            <button className="play-btn" onClick={() => togglePlay(index)}>
              {playingIndex === index ? <FaPause /> : <FaPlay />}
            </button>

            <div className="voice-text">
              <span className="title">{audio.title}</span>
              <span className="price">{audio.price}</span>
            </div>

            <a className="download-btn" href={audio.src} download>
              <ion-icon name="arrow-down-circle-outline"></ion-icon>
            </a>

            <audio
              ref={(el) => (audioRefs.current[index] = el)}
              src={audio.src}
            />
          </div>
        ))}
      </div>

      {/* <div className="sr-circle-text">
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
      </div> */}
    </div>
  );
}
