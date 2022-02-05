
import './Home.css';

import React from "react";
import { Container } from 'react-bootstrap';
import TopMovies from "./movies/TopMovies";
import TopSeries from "./series/TopSeries";

export default function Home() {
  return (
    <Container className="home-container">
      <h2 className="top-movies">Top Movies</h2>
      <TopMovies limitResults={12} />
      
      <h2 className="top-series">Top Series</h2>
      <TopSeries limitResults={12} />
    </Container>
  );
}
