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
        src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/302445068_3052441268381243_8009087776659967645_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=28-_S9CgzqQAX-F2_3O&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCbNoidO6NkGYOnDtpI7CNmdELx2pRnWfRVygY0nWnvWA&oe=649C0189"
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
