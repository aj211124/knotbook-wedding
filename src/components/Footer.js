import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Follow Us on Instagram:{" "}
          <a
            href="https://www.instagram.com/knotbookwedding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Knotbook Wedding
          </a>
        </p>
        <p>Contact Us: contact@example.com | +91 884-8192590</p>
      </div>
    </footer>
  );
}

export default Footer;
