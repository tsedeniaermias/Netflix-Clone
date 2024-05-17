import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <a href="https://www.facebook.com/netflix" target="_blank">
            {" "}
            <FacebookOutlinedIcon />
          </a>
          <a href="https://www.instagram.com/netflix/" target="_blank">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/netflix" target="_blank">
            {" "}
            <TwitterIcon />{" "}
          </a>
          <a href="https://www.youtube.com/netflix" target="_blank">
            <YouTubeIcon />
          </a>
        </div>

        <div className="footer_data">
          <div>
            <ul className="footer-links">
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <ul className="footer_links">
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notice</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>

          <div>
            <ul className="footer_links">
              <li>Gift Cards </li>
              <li>Netflix Shop </li>
              <li> Cookie Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul className="footer_links">
              <li>Media Center </li>
              <li>Terms of Use </li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul className="footer_links">
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="service_code">
          <p>Service Code</p>
        </div>
        <div className="copy-right">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
