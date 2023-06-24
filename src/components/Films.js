import React, { useState } from "react";
import { films } from "./ListOfFilms";
import { Film } from "./Film";
import Contact from "./Contact ";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, CardTitle, Icon, Button } from "react-materialize";
import { Slider } from "./Slider";
import { Header } from "./Header";
import { FilmNew } from "./FilmNew";

export const Films = ({ toggleDark, theme }) => {
  console.log(theme);
  const navigate = useNavigate();
  const [film, setFilm] = useState();

  const [visible, setVisible] = useState(false);

  const toggleDarkFilm = () => {
    toggleDark();
  };

  const toggleModal = (film) => {
    setFilm(film);
    setVisible(!visible);
  };

  const handleReloadDetail = (id) => {
    console.log(id);
    navigate("detail/" + id);
  };

  return (
    <div style={{ backgroundColor: theme ? "#fff" : "" }}>
      {/* <h2 style={{ color: theme ? "#000" : "" }}>List of Films</h2>

      <div className="theme-btn">
        <button className="btn-dt btn-theme" onClick={toggleDarkFilm}>
          Switch to {theme ? "dark" : "light"} mode
        </button>
      </div> */}
      {/* slider */}
      <Slider />
      <div className="film-container">
        <div className="film-list">
          <h1 className="film-list-title">Hot List</h1>
          <Row>
            {films.map((film, index) => (
              <Col m={4} s={12}>
                <Card
                  className="card"
                  closeIcon={<Icon>close</Icon>}
                  header={
                    <CardTitle
                      className="card-title-edit"
                      image={film.image}
                      reveal
                      waves="dark"
                    />
                  }
                  reveal={<p>{film.desc}</p>}
                  title={film.title}
                >
                  <p>{film.year}</p>
                  <p>{film.nation}</p>
                  <Button onClick={() => navigate("detail/" + film.id)}>
                    See details
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <FilmNew />
      </div>
      {visible && (
        <div className="film-modal">
          <div className="film-modal-content">
            <img src={film.image} alt={film.title} className="film-image" />
            <div className="film-details">
              <h3>{film.title}</h3>
              <p>
                <strong>Year:</strong> {film.year}
              </p>
              <p>
                <strong>Nation:</strong> {film.nation}
              </p>
              <p>
                <strong>Description:</strong> {film.desc}
              </p>
            </div>
            <div className="modal-btn">
              <button
                className="btn-dt btn-cancel"
                onClick={() => toggleModal(film)}
              >
                Cancel
              </button>
              <button
                className="btn-dt"
                onClick={() => handleReloadDetail(film.id)}
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
