import React from "react";

export const Film = ({ film, toggleModal }) => {
  const toggleModalFl = () => {
    toggleModal(film);
  };

  return (
    <div key={film.id} className="film-item">
      <img src={film.image} alt={film.title} className="film-image" />
      <div className="film-details">
        <h3>{film.title}</h3>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <div className="btn">
          <button className="btn-dt" onClick={toggleModalFl}>
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};
