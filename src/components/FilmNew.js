import React from "react";
import { Row, Col, Icon, Collection, CollectionItem } from "react-materialize";
import { filmsNew } from "./ListOfFilms";
import { useNavigate } from "react-router-dom";

export const FilmNew = () => {
  const navigate = useNavigate();
  return (
    <div className="film-new">
      <h1>favorites list</h1>
      <Row>
        <Col m={12} s={12}>
          <Collection>
            {filmsNew.map((film, indx) => (
              <CollectionItem key={indx} className="avatar">
                <img alt="" className="circle" src={film.image} />
                <span
                  className="title"
                  onClick={() => navigate("detail/" + film.id)}
                >
                  {film.title}
                </span>
                <p>
                  {film.nation}
                  <br />
                  {film.year}
                </p>
                <a className="secondary-content" href="javascript:void(0)">
                  <Icon>grade</Icon>
                </a>
              </CollectionItem>
            ))}
          </Collection>
        </Col>
      </Row>
    </div>
  );
};
