import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopMovies from "./movies/TopMovies";
import TopSeries from "./series/TopSeries";

export default function NotFound() {
  return (
    <Container>
      <h2>Oops...</h2>
      <p>
        We could not find what you're looking for.
      </p>

      <p>
        Maybe you are looking for one of the following <Link to="/movies">movies</Link> or <Link to="/series">series</Link>:
      </p>

      <TopMovies limitResults={18}></TopMovies>
      <TopSeries limitResults={18}></TopSeries>
    </Container>
  );
}
