import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmList } from "app/SwapiModule";

const SWFilms = () => {
  const dispatch = useDispatch();
  const filmList = useSelector((state) => state.swapi.filmList);
  useEffect(() => {
    dispatch(getFilmList());
  }, [dispatch]);
  return (
    <div>
      {filmList.data.map((film) => (
        <h1 className="SWFilm__item" key={film.release_date}>
          {film.title}
        </h1>
      ))}
    </div>
  );
};

export default SWFilms;
