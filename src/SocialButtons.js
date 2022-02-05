import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './SocialButtons.css';

export default function SocialButtons({ shareUrl }) {
   return (
    <div className="social-buttons-wrapper">
        <a className="btn btn-circle" href={`https://api.whatsapp.com/send?text=${shareUrl}`}>
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </a>
        <a className="btn btn-circle" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>       
        <a className="btn btn-circle" href={`https://twitter.com/intent/tweet?text=${shareUrl}`}>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
        <button className="btn btn-circle" onClick={() => navigator.clipboard.writeText(shareUrl)}>
            <FontAwesomeIcon icon={faLink} size="lg" />
        </button>
    </div>
  );
}