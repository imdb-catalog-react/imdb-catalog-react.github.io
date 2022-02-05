import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);

  useEffect(() => {
    fetch("https://v3-cinemeta.strem.io/catalog/movie/top.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTopMovies(data.metas);
      })
      .catch(error => console.log(error));
    
    fetch("https://v3-cinemeta.strem.io/catalog/series/top.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTopSeries(data.metas);
      })
      .catch(error => console.log(error));

  }, []);

  return (
    <Container className="home-container">

      <h2 className="top-movies">Top Movies</h2>

      <Row>
      {topMovies?.slice(0, 12).map(function(movie) {
        return (
          <Col key={movie.imdb_id} xs={6} sm={4} md={3} xl={2}>
            <Link to={`/movies/${movie.imdb_id}`}>
              <img className="poster" src={movie.poster} alt={movie.name} />
            </Link>
          </Col>
        );
      })}
      </Row>

      <h2 className="top-series">Top Series</h2>

      <Row>
      {topSeries?.slice(0, 12).map(function(serie) {
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
