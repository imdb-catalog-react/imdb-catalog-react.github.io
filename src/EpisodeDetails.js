import './SerieDetails.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImdbTitleDetails from "./ImdbTitleDetails";
import { Col, Row, Container } from "react-bootstrap";
import constants from './config/constants';

export default function EpisodeDetails() {
  let params = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const imdb_id = params.imdb_id;
    const seasonNumber = params.season.length > 1 ? params.season : "0" + params.season;
    const episodeNumber = params.episode.length > 1 ? params.episode : "0" + params.episode;

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
        document.title = `${data.meta.name} S${seasonNumber}E${episodeNumber} - ${constants.SITE_TITLE}`;
      })
      .catch(error => console.log(error));
  }, [params.imdb_id, params.season, params.episode]);

  return (
    <div 
      className="imdb-title-container dark-overlay" 
      style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + details?.background + ")" }}
    >
      <Container>
        <Row>
          <Col className="" xs={12} md={6} xl={8}>
            <ImdbTitleDetails details={details} />
          </Col>
          <Col className="" xs={12} md={6} xl={4}>
            Season {params.season} - Episode {params.episode}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
