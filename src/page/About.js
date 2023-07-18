import React from "react";
import { Container, Row, Col } from "react-materialize";

const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col s={12}>
          <h2 className="about-title">About Us</h2>
        </Col>
      </Row>
      <Row>
        <Col s={12} m={6}>
          <img
            src="https://66.media.tumblr.com/d7375c6c92fc45d4b04039a086cf671a/tumblr_pst63sxQ7J1vv14hj_540.png"
            className="about-image"
          />
        </Col>
        <Col s={12} m={6}>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            tortor, varius sit amet risus vitae, efficitur volutpat neque. Nam
            ac enim at nisl commodo euismod. Phasellus vitae est vitae mauris
            viverra tristique.
          </p>
          <p className="about-description">
            Sed malesuada posuere augue, sed sagittis quam vulputate non. Fusce
            faucibus faucibus lacus, nec rutrum dui lacinia a. Mauris eu felis
            vel erat lobortis aliquam. Nunc nec lacus ex. Ut suscipit ex quis
            mattis pulvinar.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
