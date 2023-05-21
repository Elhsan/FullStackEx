import cardStyle from './style2.css'
import { Link, Outlet } from 'react-router-dom'

function Card2({card}) {
    return (
        <div style={cardStyle} className="card2">
            
            <div className="card-footer">
                <h4 className='card-title'>{card.title}</h4>
                <p className='card-subtitle'>{card.subtitle}</p>
                <div className="bottom">
                    <div className="left">
                        <p>{card.owner.name}  {card.owner.date}</p>
                    </div>
                    <div className="right">
                        <p>{card.owner.views}</p>
                    </div>
                    <Link to="/cardDetails" state={{ from: String(card.id) }}>
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card2;