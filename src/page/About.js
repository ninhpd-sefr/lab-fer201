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
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/302445068_3052441268381243_8009087776659967645_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=28-_S9CgzqQAX-F2_3O&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCbNoidO6NkGYOnDtpI7CNmdELx2pRnWfRVygY0nWnvWA&oe=649C0189"
            alt="About Us"
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
