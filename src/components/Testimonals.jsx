import React from "react";
import "../components/Testimonals.css";
import user1 from "../assets/shoxake.jpg";
import user2 from "../assets/dusel.jpg";
import user3 from "../assets/doktor.jpg";
import user4 from "../assets/ihome.jpg";
import user5 from "../assets/bruno.jpg";
import user6 from "../assets/more.jpg";
import avatar1 from "../assets/shoxakeDumaloq.jpg";
import avatar2 from "../assets/duselDumaloq.jpg";
import avatar3 from "../assets/doktorDumaloq.jpg";
import avatar4 from "../assets/ihomeDumaloq.jpg";
import avatar5 from "../assets/brunoDumaloq.jpg";
import avatar6 from "../assets/moreDumaloq.jpg";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Shokh Ake uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar1,
      image: user1,
    },
    {
      id: 2,
      name: "Dusel jamoasi uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar2,
      image: user2,
    },
    {
      id: 3,
      name: "DR Ruziyev Proktolog uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar3,
      image: user3,
    },
    {
      id: 3,
      name: "iHome build jamoasi uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar4,
      image: user4,
    },
    {
      id: 3,
      name: "Brono360 uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar5,
      image: user5,
    },
    {
      id: 3,
      name: "MoreSkins.uz uchun ovoz qilib berilgan",
      date: "12 avgust, 2025 yil",
      avatar: avatar6,
      image: user6,
    },
  ];

  return (
    <section className="testimonials" id="testimonals">
        <div className="stars"></div>
      <h2 className="testimonials-title">DIKTORKHANALI KIMLARGA OVOZ YOZIB BERGAN</h2>
      <div className="testimonials-container">
        {data.map((item) => (
          <div key={item.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
              <div>
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-date">{item.date}</p>
              </div>
            </div>
            <img src={item.image} alt={item.name} className="testimonial-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
