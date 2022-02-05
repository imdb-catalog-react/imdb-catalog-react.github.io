import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../shared/poster.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function TopMovies({ limitResults }) {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch("https://v3-cinemeta.strem.io/catalog/movie/top.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (limitResults) {
            setTopMovies(data.metas.slice(0, limitResults));
        } else {
            setTopMovies(data.metas);
        }
      })
      .catch(error => console.log(error));
    
  }, [limitResults]);

  return (
    <Container>

      <Row>
      {topMovies?.map(function(movie) {
        return (
          <Col key={movie.imdb_id} xs={6} sm={4} md={3} xl={2}>
            <Link to={`/movies/${movie.imdb_id}`}>
              <img className="poster" src={movie.poster} alt={movie.name} />
            </Link>
          </Col>
        );
      })}
      </Row>

    </Container>
  );
}
