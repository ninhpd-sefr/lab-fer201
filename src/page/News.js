import React from "react";
import { Card, CardTitle, Col, Row } from "react-materialize";
import { listNews } from "../components/ListOfFilms";

const News = () => {
  return (
    <Row>
      {listNews.map((news) => (
        <Col key={news.id} s={12} m={6} l={4}>
          <Card className="news-card" header={<CardTitle image={news.image} />}>
            <h5>{news.title}</h5>
            <p>{news.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
