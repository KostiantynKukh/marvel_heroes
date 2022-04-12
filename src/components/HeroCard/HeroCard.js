import React from 'react';
import './heroCard.scss'

function HeroCard (item) {

    return (
        <div className='hero-card'>
            <img className='card-img' src={item.url} alt={item.name}/>
            <p className="card-title">
                {item.name}
            </p>
        </div>
    );
}

export default HeroCard;
