import React from 'react';
import './heroCard.scss'

function HeroCard (item) {

    return (
        <div className='hero-card'>
            <img
              className='card-img'
              alt={item.name}
              src={item.url}
            />
            <p className="card-title">
                {item.name}
            </p>
        </div>
    );
}

export default HeroCard;
