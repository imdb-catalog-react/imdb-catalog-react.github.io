import './SerieDetails.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.css';
import ImdbTitleDetails from "./ImdbTitleDetails";
import { Col, Row, Container } from "react-bootstrap";
import constants from './config/constants';

export default function SerieDetails() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState([]);

  useEffect(() => {
    const imdb_id = params.imdb_id;
    const apiUrl = `https://v3-cinemeta.strem.io/meta/series/${imdb_id}.json`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        let seasonsDup = data.meta.videos
          .map(episode => {
            return episode.season;
          });
        console.log(seasonsDup);
        seasonsDup.sort((a, b) => a - b);
        // remove duplicates
        const seasons = [...new Set(seasonsDup)];
        // if array contains element with value 0 then move it to last position
        if (seasons.includes(0)) {
          seasons.push(seasons.splice(seasons.indexOf(0), 1)[0]);
        }

        console.log(seasons);

        const shareUrl = `${window.location.origin}/series/${data.meta.imdb_id}`;
        var serie = { ...data.meta, shareUrl, seasons };
        console.log(serie);
        setDetails(serie);
        setSelectedSeason(1);
        document.title = `${data.meta.name} - ${constants.SITE_TITLE}`;
      })
      .catch(error => console.log(error));
  }, [params.imdb_id]);

  function handleSeasonChange(season) {
    setSelectedSeason(season);
  }

  return (
    <div 
      className="imdb-title-container dark-overlay" 
      style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + details?.background + ")" }}
    >
      <Container>
        <Row>
          <Col className="serieDetails" xs={12} md={6} xl={8}>
            <ImdbTitleDetails details={details} />
          </Col>
          <Col className="seasonsList" xs={12} md={6} xl={4}>
            <h2>Seasons</h2>
            {details?.seasons && details?.seasons.map(season => (
              <button className={"btn season " + (season === selectedSeason ? " active" : "")} key={season} onClick={() => handleSeasonChange(season)}>
                <span>{season === 0 ? 'special' : season}</span>
              </button>
            ))}
            <hr></hr>
            {details?.seasons && details?.seasons.filter(season => season === selectedSeason).map(season => (
              <div key={season}>
                <ul>
                  {details?.seasons && details?.videos.filter(episode => episode.season === season).map(episode => (
                    <li key={episode.id}>
                      <a className="text-white" href={`/series/${details?.imdb_id}/${episode.id}`}>
                        Episode: {episode.number} - {episode.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
