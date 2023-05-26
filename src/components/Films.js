import React from "react";
import { films } from "./ListOfFilms";
import { Film } from "./Film";

export const Films = () => {
  return (
    <div>
      <h2>List of Films</h2>
      <div className="film-list">
        {films.map((film, index) => (
          <Film film={film} />
        ))}
      </div>
    </div>
  );
};
