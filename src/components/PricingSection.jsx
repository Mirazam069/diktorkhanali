import React from "react";
import "./PricingSection.css";

export default function PricingSection() {
  const plans = [
    {
      name: "Oddiy",
      price: "600 000 so'm",
      features: [
        "3 daqiqalik ovoz",
        "MP3 format",
        "24 soat ichida yozib beriladi",
        "Sifatli ovoz",
        "Barcha formatlar",
        "Fon musiqasi",
        "Ovoz montaji",
      ],
    },
    {
      name: "Standard",
      price: "700 000 so'm",
      features: [
        "5 daqiqa ovoz",
        "MP3 + WAV format",
        "48 soat ichida yozib beriladi",
        "5 daqiqa ovoz",
        "Barcha formatlar",
        "Fon musiqasi",
        "Ovoz montaji",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "Narxi kelishiladi",
      features: [
        "5 daqiqadan yuqori ovozlar uchun",
        "Barcha formatlar",
        "Fon musiqasi",
        "1 hafta ichida yozib beriladi",
        "Barcha formatlar",
        "Fon musiqasi",
        "Ovoz montaji",
      ],
    },
  ];

  return (
    <section className="pricing-section" id="price">
      <div className="circle2-wrapper">
        <svg viewBox="0 0 300 300" className="circle2-svg">
          <defs>
            <path
              id="circle2Path"
              d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
            />
          </defs>
          <text fill="white" fontSize="20" fontWeight="600">
            <textPath
              href="#circle2Path"
              startOffset="0%"
              className="circle2-text"
            >
              Diktorkhanali • Diktorkhanali • Diktorkhanali •
            </textPath>
          </text>
        </svg>
      </div>

      <h2 className="pricing-title" >Ovoz buyurtma berish narxlari </h2>
      <div className="pricing-boxes">
        {plans.map((plan, idx) => (
          <div
            className={`pricing-box ${plan.highlight ? "highlight" : ""}`}
            key={idx}
          >
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <a
              href="https://t.me/jafarxonn"
              target="_blank"
              rel="noopener noreferrer"
              className="plan-btn"
            >
              Ovoz buyurtma berish
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
