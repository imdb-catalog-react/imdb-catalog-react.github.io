import './ImdbTitleDetails.css';
import SocialButtons from './SocialButtons';

export default function ImdbTitleDetails({details}) {
  return (
      <div>

        <h2>{details?.logo ? <img className="imdb-logo" src={details?.logo} alt={details?.name}></img> : details?.name}</h2>
        
        <SocialButtons shareUrl={details.shareUrl} />

        <p>
          {details?.runtime && 
            <span>{details?.runtime} | </span>
          } 
          <span>{details?.year} | </span>          
          <span>IMDB rating: {details?.imdbRating}</span>
        </p>
        
        {details?.genre && details.genre.length > 0 &&
            <div className="genre-container">
                <h3>Genre</h3>
                {details?.genre?.map(function(genre) {
                    return <span key={genre}>{genre} </span>;
                })}
            </div>
        }

        {details?.director && details.director.length > 0 &&
            <div className="director-container">
                <h3>Director</h3>
                {details?.director?.map(function(director) {
                    return <span key={director}>{director}&nbsp;</span>;
                })}
            </div>
        }

        {details?.writer && details.writer.length > 0 &&
            <div className="writer-container">   
                <h3>Writer</h3>
                {details?.director?.map(function(director) {
                    return <span key={director}>{director}&nbsp;</span>;
                })}
            </div>
        }

        {details?.cast && details.cast.length > 0 &&
        <div className="cast-container">
            <h3>Cast</h3>

            {details?.cast?.map(function(actor) {
                return (<span key={actor}>{actor}&nbsp;</span>);
            })}
            </div>
        }
      </div>
  );
}
