import React from "react";
import "./About.css";
import sampleVideo from "../assets/video2.MOV"; // videongni shu yerga joylaysan

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Chap tomon */}
        <div className="about-left">
          <h2 className="about-title">Diktorkhanali haqida</h2>
          <p className="about-text">
            Assalamu alaykum men G’ayratxo’jayev Ja’farxon.Suhandonlik sohasida
            7 yillik tajribaga egaman.Ushbu yillar davomida ko’plab kompaniyalar
            bilan hamkorlikda ishlab keldim va davom etmoqdaman.Mening ovozim
            orqali reklama roliklari jonlanadi.Agar sizga ham ushbu xizmat qiziq
            bo’lsa men xizmatingizga tayyorman.
          </p>
          <p className="about-text">
            Assalamu alaykum men G’ayratxo’jayev Ja’farxon.Suhandonlik sohasida
            7 yillik tajribaga egaman.Ushbu yillar davomida ko’plab kompaniyalar
            bilan hamkorlikda ishlab keldim va davom etmoqdaman.Mening ovozim
            orqali reklama roliklari jonlanadi.Agar sizga ham ushbu xizmat qiziq
            bo’lsa men xizmatingizga tayyorman.
          </p>
        </div>

        {/* O‘ng tomon */}
        <div className="about-right">
          <div className="video-wrapper">
            <video
              className="about-video"
              src={sampleVideo}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="video-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
