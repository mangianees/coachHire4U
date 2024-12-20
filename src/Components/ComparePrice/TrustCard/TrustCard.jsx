import './TrustCard.css';
import trust from '../../../images/trust/security.png';

function TrustCard({ title , body }) {
    return ( 
        <>
            <div className="itemCentered">
                <a href="#">
                    <img src={trust} alt="Trust Icon" className="trustIconImageSize" />
                </a>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </>
    );
}

export default TrustCard;
