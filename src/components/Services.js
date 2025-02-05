import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2 className="title">Our Services</h2>
      <div className="service-row">
        <div className="service-item">
          <div className="service-box">
            <img src="Wedding.jfif" alt="Wedding" className="service-image" />
            <div className="service-text">
              <h3>Weddings</h3>
              <p>
                Capturing the magic of your special day with stunning
                photography that you'll cherish forever.
              </p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-box">
            <img
              src="SaveTheDate.jfif"
              alt="Save the Date"
              className="service-image"
            />
            <div className="service-text">
              <h3>Save the Date</h3>
              <p>
                Create beautiful and memorable Save the Date announcements with
                our photography services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-row">
        <div className="service-item">
          <div className="service-box">
            <img
              src="Engagement.jfif"
              alt="Engagement"
              className="service-image"
            />
            <div className="service-text">
              <h3>Engagement</h3>
              <p>
                Celebrate your love with a romantic engagement photoshoot in
                your favorite locations.
              </p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-box">
            <img src="Baptism.jfif" alt="Baptism" className="service-image" />
            <div className="service-text">
              <h3>Baptism</h3>
              <p>
                Preserve the precious moments of your baby's baptism with our
                professional photography services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
