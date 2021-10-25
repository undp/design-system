import React from 'react';
import './countrycard.scss';
import '../../../assets/scss/_grid.scss';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const CountryCard = ({ data }) => {
  return (
    <div className='grid-x grid-margin-x'>
      {data.map(function(item, index) {
                return (
        <div className={['country-card', 'cell', `${item.size}`].join(' ')}>
          <a href={item.link} className='country-card__link'>
            {item.imageback && <><div className='country-card__overlay'></div>
              <img src={item.imageback} alt={item.imageback} className='country-card__img'/></>
            }
            <div className='country-card__caption'>
              <p>{item.name}</p>
              <Ctalink label={item.btnlabel} variant='Arrow' />
            </div>
          </a>
        </div>
      )})}
    </div>
  );
};
