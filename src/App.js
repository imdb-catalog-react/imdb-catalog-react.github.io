import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './Home';
import AppNavbar from "./Navbar";
import NotFound from './NotFound';
import MovieDetails from './MovieDetails';
import SerieDetails from './SerieDetails';
import SearchResults from './SearchResults';
import TopMovies from './movies/TopMovies';
import TopSeries from './series/TopSeries';
import EpisodeDetails from './EpisodeDetails';

export default function App() {
    return (
        <Container className="g-0" fluid>
            <AppNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<TopMovies />} />
                <Route path="/series" element={<TopSeries />} />
                <Route path="/movies/:imdb_id" element={<MovieDetails />} />
                <Route path="/series/:imdb_id" element={<SerieDetails />} />
                <Route path="/series/:imdb_id/season-:season/episode-:episode" element={<EpisodeDetails />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    )
}

