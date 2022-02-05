import '../shared/poster.css';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';

export default function TopSeries({ limitResults }) {
  const [topSeries, setTopSeries] = useState([]);

  useEffect(() => {

    fetch("https://v3-cinemeta.strem.io/catalog/series/top.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (limitResults) {
            setTopSeries(data.metas.slice(0, limitResults));
        } else {
            setTopSeries(data.metas);
        }
      })
      .catch(error => console.log(error));

  }, [limitResults]);

  return (
    <Container>

      <Row>
      {topSeries?.map(function(serie) {
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
