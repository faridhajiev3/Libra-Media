import React from "react";

function SocialIcon({ children, href }) {
  return (
    <a
      href={href}
      className="social-link"
      aria-label="Social media"
    >
      {children}
    </a>
  );
}

export default SocialIcon;
