import React, { useState } from "react";
import { films } from "./ListOfFilms";
import { Film } from "./Film";

export const Films = ({ toggleDark, theme }) => {
  const [film, setFilm] = useState();

  const [visible, setVisible] = useState(false);

  const toggleDarkFilm = () => {
    toggleDark();
  };

  const toggleModal = (film) => {
    setFilm(film);
    setVisible(!visible);
  };

  return (
    <div>
      <h2>List of Films</h2>
      <div className="theme-btn">
        <button className="btn-dt btn-theme" onClick={toggleDarkFilm}>
          {theme}
        </button>
      </div>
      <div className="film-list">
        {films.map((film, index) => (
          <Film film={film} toggleModal={toggleModal} />
        ))}
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
                Cancer
              </button>
              <button className="btn-dt" onClick={() => toggleModal(film)}>
                Watch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
