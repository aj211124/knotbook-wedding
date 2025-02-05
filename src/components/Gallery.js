import React from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
  const images = [
    { src: "Home1.jpg", alt: "Photo 1" },
    { src: "Home2.jpg", alt: "Photo 2" },
    { src: "Home3.jpg", alt: "Photo 3" },
    { src: "gallery1.jfif", alt: "Photo 4" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-next`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-arrow-right custom-arrow"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-prev`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-arrow-left custom-arrow"></i>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section className="gallery">
          <h2 className="title">Photo Gallery</h2>
          <Slider {...settings} className="slider">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
}

export default Gallery;
