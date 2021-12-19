import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Logo from "../utils/images/knot-logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <p>
            All Images and Videos Are Copyrighted. Tags: Wedding Films, Wedding
            Cinema, Fine-Art Cinematography, Cinematic Films, Wedding videos,
            Wedding Cinematographers in Mumbai, Delhi, Bangalore, Goa, London,
            Wedding Photography, Destination Wedding Photographer, Best Wedding
            Photographer
          </p>
        </div>
      </div>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">TheKnotPaper.com</p>
        <p className="footer-subscription-text">Phone : 8240136501</p>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <img src={Logo} className="fa-typo3"></img>
            </Link>
          </div>
          <small class="website-rights">The Knot Paper © 2021</small>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/theknotpaper/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://instagram.com/theknotpaper?igshid=yf7s7iubou82"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
