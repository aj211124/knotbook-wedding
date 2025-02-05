import React from "react";
import Header from "../components/Header";
import "./AboutLink.css";

function AboutLink() {
  return (
    <div>
      <section className="about">
        <div className="about-company">
          <h1 className="about-title">About Our Company</h1>
          <div className="company-details">
            <img
              src="Knotbook-logo.jpg"
              alt="Company Logo"
              className="logo-box"
            />
            <p>
              We are dedicated to capturing your special moments with elegance
              and style. Our team specializes in wedding, engagement, and
              baptism photography, ensuring that every moment is preserved
              beautifully.
            </p>
          </div>
        </div>
        <div className="about-photographer">
          <h2 className="about-title">About the Photographer</h2>
          <div className="photographer-details">
            <p>
              Our lead photographer, Amal Bava, has over 10 years of experience
              in capturing life's most precious moments. Amal's passion for
              photography is evident in every shot he takes, making your
              memories truly unforgettable.
            </p>
            <img
              src="Photographer.jpg"
              alt="Company Logo"
              className="photographer-box"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutLink;
