import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import "../../scss/footer.scss";
import { SidebarData } from "../Header/SidebarData";
import SocialIcon from "./SocialIcon";
import { NavLink } from "react-router-dom";

function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF size={16} />, href: "#" },
    { icon: <FaXTwitter size={16} />, href: "#" },
    { icon: <FaPinterest size={16} />, href: "#" },
    { icon: <SlEnvolopeLetter size={16} />, href: "#" },
  ];

  const contactInfo = [
    {
      icon: <FaLocationDot />,
      lines: ["United Arab Emirates", "689 Lynn Street Dubai"],
    },
    {
      icon: <FaPhoneAlt />,
      lines: ["(617)-276-8031", "(617)-276-8031"],
    },
    {
      icon: <SlEnvolopeLetter />,
      lines: ["admin@media.com", "support@media.com"],
    },
  ];

  const openHours = [
    { day: "Tuesday", hours: "7AM - 9PM" },
    { day: "Wednesday", hours: "7AM - 9PM" },
    { day: "Thursday", hours: "7AM - 9PM" },
    { day: "Friday", hours: "7AM - 9PM" },
    { day: "Saturday", hours: "7AM - 9PM" },
    { day: "Sunday", hours: "7AM - 9PM" },
    { day: "Monday", hours: "Close" },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Loqo */}
          <div className="footer-brand">
            <h1>Libra Media</h1>
            <p className="footer-text">
              Eiusmod consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut
            </p>
            <p className="footer-text">
              Lorem ipsum dolor sit amet, eiusmod consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footer-social">
              {socialIcons.map((social, index) => (
                <SocialIcon key={index} href={social.href}>
                  {social.icon}
                </SocialIcon>
              ))}
            </div>
          </div>

          {/* Əlaqə */}
          <div className="footer-column">
            <h2 className="footer-title">Əlaqə</h2>
            <div className="footer-contact-list">
              {contactInfo.map((contact, index) => (
                <div className="contact-item" key={index}>
                  {contact.icon}
                  {contact.lines}
                </div>
              ))}
            </div>
          </div>

          {/* Keçidlər */}
          <div className="footer-column">
            <h2 className="footer-title">Keçidlər</h2>
            <nav>
              <ul className="footer-links">
                {SidebarData.map((link, index) => (
                  <NavLink className="sidebar-links" to={link.path} key={index}>
                    {link.name}
                  </NavLink>
                ))}
              </ul>
            </nav>
          </div>

          {/* Açiq günlər */}
          <div className="footer-column">
            <h2 className="footer-title">Open Hour</h2>
            <ul className="footer-hours">
              {openHours.map((item, index) => (
                <div key={index}>
                  <li className="openHoursItem">
                    <span> {item.day}</span>
                    <span></span>
                    <span> {item.hours}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
