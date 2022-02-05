import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';

export default function SearchResults() {
  let params = useParams();
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const movieSearchApiUrl = `https://v3-cinemeta.strem.io/catalog/movie/top/search=${params.query}.json`;
    const seriesSearchApiUrl = `https://v3-cinemeta.strem.io/catalog/series/top/search=${params.query}.json`;

    fetch(movieSearchApiUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setMovies(data.metas);
      })
      .catch(error => console.log(error));
    
    fetch(seriesSearchApiUrl)
      .then(response => response.json())
      .then(data => {
          console.log(data);
          setSeries(data.metas);
      })
      .catch(error => console.log(error));
  }, [params.query]);


  return (
    <Container className="home-container">

      <h2 className="top-movies">Movies</h2>

      <Row>
      {movies.map(function(movie) {
        return (
          <Col key={movie.imdb_id} xs={6} sm={4} md={3} xl={2}>
            <Link to={`/movies/${movie.imdb_id}`}>
              <img className="poster" src={movie.poster} alt={movie.name} />
            </Link>
          </Col>
        );
      })}
      </Row>

      <h2 className="top-series">Series</h2>

      <Row>
      {series.map(function(serie) {
        return (
          <Col key={serie.imdb_id} xs={6} sm={4} md={3} xl={2}>
            <Link to={`/series/${serie.imdb_id}`}>
              <img className="poster" src={serie.poster} alt={serie.name} />
            </Link>
          </Col>
        );
      })}
      </Row>
    </Container>
  );
}
