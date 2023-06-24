import React, { useEffect, useState } from "react";
import image1 from "../assets/1.jpg";
import { useParams } from "react-router-dom";
import { films } from "../components/ListOfFilms";
import { Button } from "react-materialize";
import { ModalVideo } from "./ModalVideo";
const FilmDetail = () => {
  const idFilm = useParams().id; // Get the film ID from the URL parameter
  console.log(idFilm);

  const filmInit = films.find((item) => item.id === parseInt(idFilm));
  const [film, setFilm] = useState(filmInit);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWatchButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  


  if (!film) {
    return <p>Loading film details...</p>;
  }

  return (
    <div className="film-detail-container">
      <h2 className="film-detail-title">Film Detail</h2>
      <div className="film-detail">
        <img src={film.image} alt={film.title} className="film-image" />
        <div className="film-details">
          <h3 className="film-title">{film.title}</h3>
          <p className="film-info">Year: {film.year}</p>
          <p className="film-info">Nation: {film.nation}</p>
          <p className="film-description">{film.desc}</p>
          <div className="btn-container">
            <Button onClick={handleWatchButtonClick}>Watch</Button>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalVideo closeModal={handleCloseModal} />}
    </div>
  );
};

export default FilmDetail;
