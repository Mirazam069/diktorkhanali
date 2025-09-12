import React, { useRef, useState } from "react";
import "./VoiceList.css";
import { FaPlay, FaPause, FaDownload } from "react-icons/fa";

export default function VoiceList() {
  const audios = [
    { title: "Football uchun qilingan ovoz", artist: "Diktor A", src: "/audios/voice1.mp3" },
    { title: "Astral kinosi ovozi", artist: "Diktor B", src: "/audios/voice2.mp3" },
    { title: "Podcast intro", artist: "Diktor C", src: "/audios/voice3.mp3" },
    { title: "Ovozzi jinnisi eshitib ko'rila", artist: "Diktor D", src: "/audios/voice4.mp3" },
    { title: "Porno uchun qilingan ovoz", artist: "Diktor D", src: "/audios/voice4.mp3" },
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
    <div className="voice-list">
      {audios.map((audio, index) => (
        <div className="voice-item" key={index}>
          <button className="play-btn" onClick={() => togglePlay(index)}>
            {playingIndex === index ? <FaPause /> : <FaPlay />}
          </button>

          <div className="voice-info">
            <span className="title">{audio.title}</span>
            <span className="artist">{audio.artist}</span>
          </div>

          <a className="download-btn" href={audio.src} download>
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </a>

          <audio ref={(el) => (audioRefs.current[index] = el)} src={audio.src} />
        </div>
      ))}
    </div>
  );
}
