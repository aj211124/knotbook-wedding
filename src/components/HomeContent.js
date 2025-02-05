// src/components/HomeContent.js
import React from "react";
import "./HomeContent.css";

function HomeContent() {
  return (
    <section>
      <div className="title">
        <h1 className="title">Knotbook Wedding</h1>
      </div>
      <div className="hero">
        <div className="hero-content">
          <h1>Capturing Your Special Moments</h1>
          <p>
            We specialize in wedding, engagement, and baptism photography,
            creating timeless memories for you to cherish forever.
          </p>
        </div>
        <div className="photo-boxes">
          <img
            src="Home3.jpg"
            alt="Company Logo"
            className="photographer-box"
          />
          <img
            src="Home1.jpg"
            alt="Company Logo"
            className="photographer-box"
          />
          <img
            src="Home2.jpg"
            alt="Company Logo"
            className="photographer-box"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
