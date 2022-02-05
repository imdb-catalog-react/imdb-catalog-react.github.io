import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import AppNavbar from "./Navbar";
import NotFound from './NotFound';
import MovieDetails from './MovieDetails';
import SerieDetails from './SerieDetails';
import SearchResults from './SearchResults';
import ScrollToTop from './ScrollToTop';

const App = () => (
  <div className="container-fluid g-0">
    <AppNavbar />
    <BrowserRouter>
      <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />      
            <Route path="/movies/:imdb_id" element={<MovieDetails />} />
            <Route path="/series/:imdb_id" element={<SerieDetails />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
