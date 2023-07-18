import React from "react";
import { Row, Col, Card, CardTitle, Icon, Button } from "react-materialize";
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        You can reach out to us through the following contact information:
      </p>
      <img
        className="contact-image"
        src="https://66.media.tumblr.com/d7375c6c92fc45d4b04039a086cf671a/tumblr_pst63sxQ7J1vv14hj_540.png"
        alt="Contact Image"
      />
      <ul className="contact-list">
        <li>Email: info@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
};

export default Contact;
