import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.css';
import ImdbTitleDetails from "./ImdbTitleDetails";
import { Container } from "react-bootstrap";

export default function MovieDetails() {
  let params = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const imdb_id = params.imdb_id;
    const query = `{"params":[null,{"query":{"imdb_id":"${imdb_id}"}}],"method":"meta.get","id":1,"jsonrpc":"2.0"}`;
    console.log(query);
    const apiUrl = `https://cinemeta.strem.io/stremioget/stremio/v1/q.json?b=${btoa(query)}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDetails({ ...data.result, shareUrl: `${window.location.origin}/movies/${data.result.imdb_id}` });
      })
      .catch(error => console.log(error));
  }, [params.imdb_id]);

  return (
    <div className="imdb-title-container dark-overlay" style={{ background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + details?.background + ")" }}>
      <Container>
        <ImdbTitleDetails details={details} />
      </Container>
    </div>
  );
}
